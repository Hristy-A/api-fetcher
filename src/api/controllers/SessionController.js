/* eslint-disable no-multi-assign */
module.exports = class SessionController {
  static async getSession(req, res, next) {
    const { nickname } = req.body;
    res.locals.user = req.session.user = { nickname };
    res.sendStatus(200);
  }
};
