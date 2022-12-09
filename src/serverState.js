/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const getUUID = require('./lib/getUUID');

function deleteIfExists(array, callback) {
  const index = array.findIndex(callback);
  if (index === -1) {
    return false;
  }

  array.splice(index, 1);
  return true;
}
function genPosField() {
  const field = [];
  for (let i = 0; i < 5; i++) {
    field.push([]);
    for (let j = 0; j < 5; j++) {
      field[i].push({ i, j });
    }
  }
  return _.flattenDeep(field);
}

class Lobby {
  constructor(owner, wordsLibrary) {
    this.owner = owner;
    this.id = getUUID();
    this.players = owner;
    this._wordsLibrary = wordsLibrary;
  }

  get groups() {
    return this._gameField;
  }

  generateGameField() {
    this.firstMove = Math.round(Math.random()) ? 'blue' : 'red';

    const resultDict = [];
    const justCopy = this._wordsLibrary.slice();
    for (let i = 0; i < 25; i++) {
      resultDict.push(justCopy.splice(Math.floor(Math.random() * justCopy.length), 1)[0]);
    }

    if (this.firstMove === 'blue') {
      this.blueCardsCount = 9;
      this.redCardsCount = 8;
    } else {
      this.blueCardsCount = 8;
      this.redCardsCount = 9;
    }

    const possiblePositions = genPosField();

    const red = [];
    const blue = [];
    const dark = possiblePositions.splice(Math.floor(Math.random() * possiblePositions.length), 1)[0];

    for (let i = 0; i < 17; i++) {
      if (this.firstMove === 'blue') {
        if (i % 2 === 0) {
          blue.push(possiblePositions.splice(Math.floor(Math.random() * possiblePositions.length), 1)[0]);
        } else {
          red.push(possiblePositions.splice(Math.floor(Math.random() * possiblePositions.length), 1)[0]);
        }
      } else if (i % 2 === 0) {
        red.push(possiblePositions.splice(Math.floor(Math.random() * possiblePositions.length), 1)[0]);
      } else {
        blue.push(possiblePositions.splice(Math.floor(Math.random() * possiblePositions.length), 1)[0]);
      }
    }

    const groups = [];
    for (let i = 0; i < 5; i++) {
      groups.push(resultDict.splice(0, 5).map((word, j) => {
        if (dark.i === i && dark.j === j) {
          return { word, type: 'dark', solved: false };
        }
        if (blue.find((pos) => pos.i === i && pos.j === j)) {
          return { word, type: 'blue', solved: false };
        }
        if (red.find((pos) => pos.i === i && pos.j === j)) {
          return { word, type: 'red', solved: false };
        }
        return { word, type: 'neutral', solved: false };
      }));
    }

    this._gameField = groups;
    return groups;
  }

  generateWordPreset() {
    const groups = this.generateGameField();
    this.initialized = true;
    return groups;
  }
}

module.exports = class ServerState {
  _wordsLibrary;

  _lobbies = [];

  constructor() {
    const wordsLibrary = fs.readFileSync(path.resolve('words.txt'), 'utf8');
    this._wordsLibrary = JSON.parse(wordsLibrary);
  }

  createLobby(player) {
    const lobby = new Lobby(player, this._wordsLibrary.slice());
    this._lobbies.push(lobby);
    return lobby.id;
  }

  findLobby(lobbyId) {
    return this._lobbies.find((lobby) => lobby.id === lobbyId);
  }

  destroyLobby(userId) {
    deleteIfExists(this._lobbies, (user) => user.id === userId);
  }

  prepareOrGetExistsGame(lobbyId) {
    const lobby = this.findLobby(lobbyId);
    if (lobby.initialized) return lobby.groups;

    return lobby?.generateWordPreset();
  }
};
