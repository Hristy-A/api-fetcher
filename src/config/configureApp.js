/* eslint-disable global-require */
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const ssr = require('../middlewares/ssr');

module.exports = function configureApp(app) {
  app.set('x-powered-by', false);

  process.env.PORT ??= 3000;

  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.resolve('public')));
  app.use(ssr);
};
