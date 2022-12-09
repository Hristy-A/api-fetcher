/* eslint-disable no-multi-assign */
const fetch = require('node-fetch');
const Fetcher = require('../views/fetcher/Fetcher');

module.exports = class IndexController {
  static async renderMainPage(req, res, next) {
    res.renderComponent(Fetcher, { title: 'Fetcher' });
  }

  static async executeCallApi(req, res, next) {
    const { url, method, body: data } = req.body;

    let response;

    try {
      switch (method.toLowerCase()) {
        case 'post':
          response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: data,
          });
          break;
        default:
          response = await fetch(url);
          break;
      }

      if (response.ok) {
        res.status(response.status).json(await response.json());
      } else {
        try {
          res.status(response.status).json(await response.json());
        } catch (error) {
          res.sendStatus(response.status);
        }
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};
