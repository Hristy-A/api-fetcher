const session = require('express-session');

module.exports = function configureSession(app) {
  app.locals.SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME;

  return session({
    name: app.locals.SESSION_COOKIE_NAME,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: Number(process.env.SESSION_LIVE_TIME_DAYS) * 1000 * 60,
      httpOnly: true,
      secure: app.get('env') === 'production',
    },
  });
};
