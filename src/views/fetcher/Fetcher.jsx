const React = require('react');
const Layout = require('../Layout');

module.exports = function Index({ user, title }) {
  return (
    <Layout user={user} styles="./styles/fetcher.css" bootstrap>
      <div className="modal fade" id="image-preview-modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Image preview</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div id="loading-modal-body" className="cst-loading">
                <div />
                <div />
                <div />
              </div>
              <img id="modal-image-preview" src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="main-body">
        <div className="d-flex justify-content-center ">
          <div className="cst-header">
            <h1>
              {title}
            </h1>
          </div>
        </div>
        <div className="container g-5">
          <form name="call-api" id="call-api" action="/fetcher" method="POST">
            <div className="row mb-3 justify-content-center">
              <div className="col-7">
                <input type="text" name="api-link" id="api-link" className="form-control" />
              </div>
              <div className="col-1">
                <select name="api-method" id="api-method" className="form-control">
                  <option defaultChecked value="get">get</option>
                  <option value="post">post</option>
                </select>
              </div>
              <div className="col-2">
                <button type="submit" className="form-control btn btn-success">Fire</button>
              </div>
            </div>
            <div className="row justify-content-center mb-3">
              <div id="request-body-container" className="col-10" />
            </div>
          </form>
          <div className="row justify-content-center mb-3">
            <div className="col-10">
              <div id="danger-alert">
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#842029" style={{ height: '24px', marginRight: '10px' }} viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <div className="cst-alert-text" />
                </div>
              </div>
              <div id="warning-alert">
                <div className="alert alert-warning d-flex align-items-center" role="alert">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#664d03" style={{ height: '24px', marginRight: '10px' }} viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <div className="cst-alert-text" />
                </div>
              </div>

            </div>
          </div>
          <div className="row justify-content-center mb-3">
            <div id="loading-main-body" className="cst-loading">
              <div />
              <div />
              <div />
            </div>

            <div id="request-body-container" className="col-12">
              <pre id="json-display" spellCheck={false} />
            </div>
          </div>

        </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous" />
      <script type="text/javascript" src="./jquery.json-editor.min.js" />
      <script defer src="../scripts/fetcher.js" />
    </Layout>
  );
};
