const route = require('express').Router();

const SessionController = require('../controllers/SessionController');

route.post('/cookie', (req, res, next) => { SessionController.getSession(req, res, next); });

module.exports = route;
