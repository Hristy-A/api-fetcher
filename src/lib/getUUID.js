const uuid = require('uuid');

module.exports = function getUUID() {
  return uuid.v4().replace(/-/g, '');
};
