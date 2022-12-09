const wrap = (middleware) => (socket, next) => middleware(socket.request, {}, next);

module.exports = function configureSockets(io, app, server, serverState, session) {
  io.use(wrap(session));

  io.on('connection', (socket) => {
    if (!socket.request?.session?.user || !socket.request.session.user.lobbyId) {
      socket.emit('redirect', '/findwords');
      socket.disconnect();
      return;
    }

    console.log(socket.id);
    console.log(socket.request.session.user.id);
    socket.to(socket.request.session.user.lobbyId).emit('connected', socket.request.session.user);

    socket.emit('game-state');
  });
};
