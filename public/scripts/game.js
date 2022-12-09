const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log(socket.id);
});

socket.on('redirect', (redirection) => window.location = redirection);
