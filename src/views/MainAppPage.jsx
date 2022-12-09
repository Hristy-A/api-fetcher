const React = require('react');
const Layout = require('./Layout');

module.exports = function Index({ user, title }) {
  return (
    <Layout user={user} styles="../styles/mainPage.css" bootstrap>
      <div id="particles-js" />
      <div className="main-body">
        <div className="d-flex justify-content-center ">
          <div className="cst-header">
            <h1>
              {title}
            </h1>
            <h5 className="text-end">by Hristy</h5>
          </div>
        </div>
        <div className="container g-5">
          <div className="row justify-content-center">
            <div className="col-2 d-flex align-items-center justify-content-center">
              <a href="/findwords">
                <div className="cst-card">
                  <div className="cst-logo">
                    <img className="cst-img" src="/img/findwords.png" alt="findwords" />
                  </div>
                  <div className="cst-description text-decoration-none">findwords</div>
                </div>
              </a>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
              <a href="/fetcher" className="text-decoration-none">
                <div className="cst-card">
                  <div className="cst-img-block">
                    <div className="cst-logo">
                      <div className="cst-logo-text">F</div>
                    </div>
                  </div>
                  <div className="cst-description text-decoration-underline">fetcher</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <script src="./particles.js" />
      <script src="./particlesRunner.js" />
    </Layout>
  );
};
