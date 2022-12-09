const React = require('react');
const Layout = require('./Layout');

module.exports = function Lobby({ user, title, lobbyId }) {
  return (
    <Layout user={user} styles="./styles/index.css" bootstrap>
      <div>
        {`Lobby with identifier ${lobbyId} not found`}
      </div>
      <script src="../../scripts/lobbyCreate.js" />
    </Layout>
  );
};
