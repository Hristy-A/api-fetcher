const wrap = (middleware) => (socket, next) => middleware(socket.request, {}, next);

module.exports = function configureSockets(io, app, server, serverState, session) {
  io.use(wrap(session));

  io.on('connection', (socket) => {
    if (!socket.request?.session?.user || !socket.request.session.user.lobbyId) {
      socket.emit('redirect', '/findwords');
      socket.disconnect();
      return;
    }

    console.log(`socket id ${socket.id}`);
    console.log(`user id ${socket.request.session.user.id}`);
    console.log(`lobby id ${socket.request.session.user.lobbyId}`);

    // socket.join(socket.request.session.user.lobbyId);
    // socket.in(socket.request.session.user.lobbyId).emit('current-game-state', app.serverState.getCurrentGameState(socket.request.session.user.lobbyId));

    io.in(socket.request.session.user.lobbyId).emit('eaf', socket.request.session.user.nickname);

    socket.on('disconnect', () => {
      io.to(socket.request.session.user.lobbyId);
    });
  });
};
