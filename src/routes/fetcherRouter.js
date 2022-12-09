const FetcherController = require('../controllers/FetcherController');

module.exports = function fetcherRouter(route) {
  route.get('/', (req, res, next) => { FetcherController.renderMainPage(req, res, next); });
  route.post('/', (req, res, next) => { FetcherController.executeCallApi(req, res, next); });

  return route;
};
