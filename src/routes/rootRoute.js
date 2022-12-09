const route = require('express').Router();

const RootController = require('../controllers/RootController');

route.get('/', (req, res, next) => { RootController.renderMainPage(req, res, next); });

module.exports = route;
