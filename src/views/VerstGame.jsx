const React = require('react');
const Layout = require('./Layout');

module.exports = function Verst({ user, title }) {
  return (
    <Layout user={user} styles="../styles/game.css" bootstrap>
      <nav>
        <div className="header">
          <div>Наблюдатели</div>
          <div className="unresolved-players">
            Игрок1 Игрок2
          </div>
        </div>
      </nav>
      <main>
        <div className="cst-main-content">
          <div className="red-team">
            <div className="red-team-panel cst-panel">
              <div className="red-word-counter">9</div>
              <div>Следователь:</div>
              <div className="red-operative">-</div>
              <input type="button" value="буду следователем" />
              <div>Шпион:</div>
              <div className="red-spy">-</div>
              <input type="button" value="буду шпионом" />
            </div>
          </div>
          <div className="game-board">

            <table className="game-table">
              <tbody className="game-tbody">
                <tr className="game-row">
                  <td className="game-cell cst-blue">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell cst-red">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell cst-dark">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="game-row">
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="game-row">
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="game-row">
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="game-row">
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                  <td className="game-cell">
                    <div className="cst-card-border">
                      <div className="cst-card">
                        <div className="cst-card-text">random</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="guess-panel">
              {/* <div className="cst-input">
                <input type="text" name="word-tip" id="word-tip" required />
                <input type="number" name="words-count" id="words-count" min={1} max={9} required />
                <input type="button" value="Намекнуть" />
              </div> */}
              {/* <div className="tip-box cst-blue">
                <div className="tip-message cst-tip">hello</div>
                <div className="match-word-count cst-tip">5</div>
              </div> */}
            </div>

          </div>
          <div className="blue-team">
            <div className="blue-team-panel cst-panel">
              <div className="blue-word-counter">9</div>
              <div>Следователь:</div>
              <div className="blue-operative">-</div>
              <input type="button" value="буду следователем" />
              <div>Шпион:</div>
              <div className="blue-spy">-</div>
              <input type="button" value="буду шпионом" />
            </div>
          </div>
        </div>
      </main>

      <script src="../../scripts/generateLayout.js" />
    </Layout>
  );
};
