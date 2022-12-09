document.querySelector('#socket').addEventListener('click', () => {
  const socket = io('http://localhost:3000');

  socket.on('connection', () => {
    console.log(socket.id);
  });
});

document.querySelector('#test').addEventListener('click', async (e) => {
  // console.log('tapped');
  // console.log(socket);

  const response = await fetch('/api/cookie', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ nickname: 'test_user' }),
  });

  console.log(response.status);
});
