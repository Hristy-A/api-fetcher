// cst-blue to make blue
// cst-red to make red
// cst-dark to make dark
const spectators = document.getElementById('spectators');

const redTeamCounter = document.getElementById('red-cards-counter');
const redOperative = document.getElementById('red-operative');
const redOperativeBtn = document.getElementById('red-operative-btn');
const redSpy = document.getElementById('red-spy');
const redSpyBtn = document.getElementById('red-spy-btn');

const blueTeamCounter = document.getElementById('blue-cards-counter');
const blueOperative = document.getElementById('blue-operative');
const blueOperativeBtn = document.getElementById('blue-operative-btn');
const blueSpy = document.getElementById('blue-spy');
const blueSpyBtn = document.getElementById('blue-spy-btn');

const mainTable = document.getElementById('main-table-content');

const guestSpyPanel = document.getElementById('guest-spy-panel');
const guestSpyWord = document.getElementById('guest-spy-word');
const guestSpyCount = document.getElementById('guest-spy-count');
guestSpyPanel.hidden = true;

const guestOperativePanel = document.getElementById('guest-operative-panel');
const guestOperativeWord = document.getElementById('guest-operative-word');
const guestOperativeCount = document.getElementById('guest-operative-count');
guestOperativePanel.hidden = true;

const socket = io('http://localhost:3000');

function syncGameState(gameState) {
  spectators.textContent = gameState.spectators;

  redTeamCounter.textContent = gameState.redTeamCounter;
  redOperative.textContent = gameState.redOperative;
  redOperativeBtn.hidden = !gameState.redOperativeBtnVisible;
  redSpy.textContent = gameState.redSpy;
  redSpyBtn.hidden = !gameState.redSpyBtnVisible;

  blueTeamCounter.textContent = gameState.blueTextCounter;
  blueOperative.textContent = gameState.blueOperative;
  blueOperativeBtn.hidden = !gameState.blueOperativeBtnVisible;
  blueSpy.textContent = gameState.blueSpy;
  blueSpyBtn.hidden = !gameState.blueSpyBtnVisible;

  guestSpyPanel.hidden = !gameState.guestSpyPanelVisible;
  guestSpyWord.textContent = gameState.guestSpyWord;
  guestSpyCount.textContent = gameState.guestSpyCount;

  guestOperativePanel.hidden = !gameState.guestOperativePanelVisible;
  guestOperativeWord.textContent = gameState.guestOperativeWord;
  guestOperativeCount.textContent = gameState.guestOperativeCount;
}

socket.on('current-game-state', (gameState) => {
  syncGameState(gameState);
});
socket.on('connected', (user) => {
  console.log(user);
});

socket.on('eaf', (data) => {
  console.log(data);
});

socket.on('redirect', (redirection) => window.location = redirection);
