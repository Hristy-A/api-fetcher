/* eslint-disable no-multi-assign */
const Findwords = require('../views/Findwords');
const LobbyCreate = require('../views/LobbyCreate');
const LobbyRegister = require('../views/LobbyRegister');
const Test = require('../views/Test');
const Game = require('../views/Game');
const LobbyNotFound = require('../views/LobbyNotFound');

const getUUID = require('../lib/getUUID');

module.exports = class FindwordsController {
  static async renderIndexPage(req, res, next) {
    res.renderComponent(Findwords, { title: 'findwords' });
  }

  static async renderLobbyCreatePage(req, res, next) {
    res.renderComponent(LobbyCreate, { title: 'lobby' });
  }

  static async renderTestPage(req, res, next) {
    res.renderComponent(Test, { title: 'test' });
  }

  static async registerLobbyAndOwner(req, res, next) {
    if (req.session.user) {
      req.app.locals.serverState.destroyLobby(req.session.user.id);
    }
    const { nickname } = req.body;
    const user = res.locals.user = req.session.user = { nickname, owner: true, id: getUUID() };
    const lobbyId = req.app.locals.serverState.createLobby(req.session.user);
    user.lobbyId = lobbyId;
    res.status(200).json({ lobbyId });
  }

  static async connectToLobbyAndStart(req, res, next) {
    const { lobbyId } = req.params;
    const lobby = req.app.locals.serverState.findLobby(req.params.lobbyId);

    if (!lobby) {
      res.renderComponent(LobbyNotFound, { lobbyId });
      return;
    }

    if (req.session.user?.lobbyId !== lobby.id) {
      req.session.user = { wishLobbyId: lobbyId };
      res.redirect('/findwords/lobby/register');
      return;
    }

    const wordsGroups = req.app.locals.serverState.prepareOrGetExistsGame(lobbyId);

    res.renderComponent(Game, { user: req.session.user, wordsGroups });
  }

  static async renderLobbyRegisterPage(req, res, next) {
    res.renderComponent(LobbyRegister, { title: 'lobby' });
  }

  static async registerPlayerInLobby(req, res, next) {
    const { nickname } = req.body;
    if (req.session.user && req.session.user.lobbyId && req.session.user.owner) {
      req.app.locals.serverState.destroyLobby(req.session.user.id);
    }
    if (req.session.user?.wishLobbyId) {
      const lobby = req.app.locals.serverState.findLobby(req.session.user.wishLobbyId);
      if (lobby) {
        res.locals.user = req.session.user = {
          nickname, owner: false, id: getUUID(), lobbyId: lobby.id,
        };
        res.status(200).json({ lobbyId: lobby.id });
      } else {
        res.sendStatus(404);
      }
    } else {
      res.sendStatus(404);
    }
  }
};
