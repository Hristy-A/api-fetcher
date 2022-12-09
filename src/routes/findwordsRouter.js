const VerstGame = require('../views/VerstGame');

const FindwordsController = require('../controllers/FindwordsController');

module.exports = function findwordsRouter(route) {
  route.get('/', (req, res, next) => { FindwordsController.renderIndexPage(req, res, next); });

  route.get('/lobby/create', (req, res, next) => { FindwordsController.renderLobbyCreatePage(req, res, next); });
  route.post('/lobby/create', (req, res, next) => FindwordsController.registerLobbyAndOwner(req, res, next));

  route.get('/lobby/register', (req, res, next) => { FindwordsController.renderLobbyRegisterPage(req, res, next); });
  route.post('/lobby/register', (req, res, next) => { FindwordsController.registerPlayerInLobby(req, res, next); });

  route.get('/lobby/:lobbyId', (req, res, next) => FindwordsController.connectToLobbyAndStart(req, res, next));

  route.get('/test', (req, res, next) => { FindwordsController.renderTestPage(req, res, next); });

  route.get('/verst', (req, res, next) => res.renderComponent(VerstGame));

  return route;
};
