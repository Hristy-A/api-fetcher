const React = require('react');
const Layout = require('./Layout');

module.exports = function Index({ user, title }) {
  return (
    <Layout user={user} styles="./styles/findwords.css" bootstrap>
      <div className="main-body">
        <div className="d-flex justify-content-center ">
          <div className="cst-header">
            <h1>
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className="container g-5">

        <div className="row justify-content-center">
          <div className="col-10 d-flex justify-content-center">
            <div className="cst-btn"><a href="/findwords/lobby/create">new lobby</a></div>
          </div>
        </div>

      </div>
    </Layout>
  );
};
