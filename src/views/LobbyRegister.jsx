const React = require('react');
const Layout = require('./Layout');

module.exports = function Lobby({ user, title }) {
  return (
    <Layout user={user} styles="./styles/index.css" bootstrap>
      <div>
        <form id="registerLobby" name="registerLobby" action="/findwords/lobby/register" method="POST">
          <div className="mb-3">
            <label htmlFor="nickname" className="form-label">Nickname</label>
            <input type="text" className="form-control" id="nickname" name="nickname" required pattern="\p{Alphabetic}+(\s?\p{Alphabetic}+)*" maxLength="30" aria-describedby="nicknameHelp" />
            <div id="nicknameHelp" className="form-text">Enter your nickname (30 symbols max)</div>
          </div>
          <button type="submit" id="create-lobby" className="btn btn-primary">Create lobby</button>
        </form>
      </div>
      <script src="../../scripts/lobbyRegister.js" />
    </Layout>
  );
};
