const getFullUrl = require('../lib/getFullUrl');

module.exports = function getSessionValidator(sessionPickerName) {
  return function validateSession(req, res, next) {
    if (!req.session.user && req.cookies[req.app.locals[sessionPickerName]]) {
      res.clearCookie(req.app.locals[sessionPickerName]);
      res.redirect(getFullUrl(req));
      return;
    }
    next();
  };
};
