/* eslint-disable global-require */
const cookieParser = require('cookie-parser');
const session = require('express-session');
const rawRoute = require('express').Router();
const swap = require('../middlewares/swap');
const getSessionValidator = require('../middlewares/getSessionValidator');

const findwordsRouter = require('../routes/findwordsRouter');

module.exports = function configureApp(app) {
  app.locals.SESSION_WORDFIND_COOKIE_NAME = process.env.SESSION_WORDFIND_COOKIE_NAME;

  const sessionConfig = session({
    name: app.locals.SESSION_WORDFIND_COOKIE_NAME,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: Number(process.env.SESSION_WORDFIND_LIVE_TIME_MINUTES) * 1000 * 60,
      httpOnly: true,
      secure: app.get('env') === 'production',
    },
  });
  const validateSession = getSessionValidator('SESSION_WORDFIND_COOKIE_NAME');

  rawRoute.use(sessionConfig);
  rawRoute.use(cookieParser());
  rawRoute.use(validateSession);
  rawRoute.use(swap);

  const findwordsRoute = findwordsRouter(rawRoute);

  return { findwordsRoute, session: sessionConfig };
};
