/* eslint-disable new-cap */
/* eslint-disable no-new-require */
require('@babel/register');
require('dotenv').config();

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const ServerState = require('./serverState');

const serverState = new ServerState();
app.locals.serverState = serverState;

const configureApp = require('./config/configureApp');
const configureSockets = require('./config/configureSockets');

const checkDb = require('./lib/checkDb');
const logger = require('./lib/logger');

const rootRoute = require('./routes/rootRoute');
const configureFindwordsRoute = require('./config/configureFindwordsRoute');
const configureFetcherRoute = require('./config/configureFetcherRoute');
const apiRoute = require('./api/routes/createSession');

configureApp(app);

app.use('/', rootRoute);

const { findwordsRoute, session } = configureFindwordsRoute(app);
app.use('/findwords', findwordsRoute);

configureSockets(io, app, server, serverState, session);

app.use('/fetcher', configureFetcherRoute(app));
app.use('/api', apiRoute);

server.listen(process.env.PORT, () => {
  logger.log(`Server started on ${logger.success(`http://localhost:${process.env.PORT}`)}`);
});

// checkDb()
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       logger.log(`Server started on ${logger.success(`http://localhost:${process.env.PORT}`)}`);
//     });
//   })
//   .catch((err) => {
//     logger.log(logger.fatal('Database error:').concat(' ').concat(logger.error(err.message)));
//   });
