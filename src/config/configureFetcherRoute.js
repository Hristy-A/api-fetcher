/* eslint-disable global-require */
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const rawRoute = require('express').Router();
const swap = require('../middlewares/swap');
const getSessionValidator = require('../middlewares/getSessionValidator');

const fetcherRouter = require('../routes/fetcherRouter');

module.exports = function configureApp(app) {
  app.locals.SESSION_FETCHER_COOKIE_NAME = process.env.SESSION_FETCHER_COOKIE_NAME;

  const sessionConfig = session({
    name: app.locals.SESSION_FETCHER_COOKIE_NAME,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: Number(process.env.SESSION_FETCHER_LIVE_TIME_DAYS) * 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: app.get('env') === 'production',
    },
  });
  const validateSession = getSessionValidator('SESSION_FETCHER_COOKIE_NAME');
  const corsOptions = {
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200,
  };

  rawRoute.use(sessionConfig);
  rawRoute.use(cookieParser());
  rawRoute.use(validateSession);
  rawRoute.use(swap);
  rawRoute.use(cors(corsOptions));

  return fetcherRouter(rawRoute);
};
