const nicknameInp = document.querySelector('#nickname');
const { registerLobby } = document.forms;

registerLobby.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nickname = registerLobby.nickname.value;
  if (!nickname && !nicknameInp.checkValidity()) return;

  const response = await fetch(registerLobby.action, {
    headers: { 'Content-Type': 'application/json' },
    method: registerLobby.method,
    body: JSON.stringify({ nickname }),
  });

  if (response.ok) {
    const { lobbyId } = await response.json();
    window.location = `http://localhost:3000/findwords/lobby/${lobbyId}`;
  }
});
