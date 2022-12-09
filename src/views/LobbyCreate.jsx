const React = require('react');
const Layout = require('./Layout');

module.exports = function Lobby({ user, title }) {
  return (
    <Layout user={user} styles="../../styles/createLobby.css" bootstrap>
      <div className="main-body">
        <div className="d-flex justify-content-center ">
          <div className="cst-header">
            <h1>
              findwords
            </h1>
          </div>
        </div>
      </div>
      <div className="container g-5">

        <div className="row justify-content-center">
          <div className="col-10 d-flex justify-content-center">
            <form id="registerLobby" name="registerLobby" action="/findwords/lobby/create" method="POST">
              <div className="mb-3">
                <label htmlFor="nickname" className="form-label">Nickname</label>
                <input type="text" className="form-control" id="nickname" name="nickname" required pattern="\p{Alphabetic}+(\s?\p{Alphabetic}+)*" maxLength="30" aria-describedby="nicknameHelp" />
                <div id="nicknameHelp" className="form-text">Enter your nickname (30 symbols max)</div>
              </div>
              <button type="submit" id="create-lobby" className="btn btn-primary w-100">Create lobby</button>
            </form>
          </div>
        </div>

      </div>
      <script src="../../scripts/lobbyCreate.js" />
    </Layout>
  );
};
