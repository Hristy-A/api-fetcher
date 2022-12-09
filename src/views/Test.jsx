const React = require('react');
const Layout = require('./Layout');

module.exports = function Test({ user, title }) {
  return (
    <Layout user={user} styles="./styles/index.css" bootstrap>
      <script src="https://cdn.socket.io/4.5.4/socket.io.min.js" integrity="sha384-/KNQL8Nu5gCHLqwqfQjA689Hhoqgi2S84SNUxC3roTe4EhJ9AfLkp8QiQcU8AMzI" crossOrigin="anonymous" />
      <div>
        <form>
          <h2>{JSON.stringify(user)}</h2>
          <input type="button" value="test" id="test" />
          <input type="button" value="socket" id="socket" />
        </form>
      </div>
      <script src="../scripts/test.js" />
    </Layout>
  );
};
