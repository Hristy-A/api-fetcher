/* eslint-disable no-console */
const c = require('ansi-colors');

module.exports = {
  log(...msg) {
    console.log(...msg);
  },

  warn(msg) {
    return c.yellow(msg);
  },

  error(msg) {
    return c.bold.red(msg);
  },

  info(msg) {
    return c.bold.cyan(msg);
  },

  success(msg) {
    return c.bold.green(msg);
  },

  fatal(msg) {
    return c.bgBlack.bold.red(msg);
  },
};

