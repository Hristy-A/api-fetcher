/* eslint-disable no-multi-assign */
const MainAppPage = require('../views/MainAppPage');

module.exports = class IndexController {
  static async renderMainPage(req, res, next) {
    res.renderComponent(MainAppPage, { title: 'connect' });
  }
};
