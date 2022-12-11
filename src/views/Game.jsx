const React = require('react');
const Layout = require('./Layout');

module.exports = function Lobby({ user, title, wordsGroups }) {
  return (
    <Layout user={user} styles="../../styles/game.css" bootstrap>
      <script src="https://cdn.socket.io/4.5.4/socket.io.min.js" integrity="sha384-/KNQL8Nu5gCHLqwqfQjA689Hhoqgi2S84SNUxC3roTe4EhJ9AfLkp8QiQcU8AMzI" crossOrigin="anonymous" />
      <nav>
        <div className="header">
          <div>Наблюдатели:</div>
          <div id="spectators" className="unresolved-players" />
        </div>
      </nav>
      <main>
        <div className="cst-main-content">
          <div className="red-team">
            <div className="red-team-panel cst-panel">
              <div id="red-cards-counter" className="red-word-counter">9</div>
              <div>Следователь:</div>
              <div id="red-operative" className="red-operative">-</div>
              <input id="red-operative-btn" type="button" value="буду следователем" />
              <div>Шпион:</div>
              <div id="red-spy" className="red-spy">-</div>
              <input id="red-spy-btn" type="button" value="буду шпионом" />
            </div>
          </div>
          <div className="game-board">
            <table id="main-table-content" className="game-table">
              <tbody className="game-tbody">
                {
                  wordsGroups.map((wordsGroup) => (
                    <tr className="game-row">
                      {
                      wordsGroup.map((word) => (
                        <td className="game-cell">
                          <div className="cst-card-border">
                            <div className="cst-card">
                              <div className="cst-card-text">{word.word}</div>
                            </div>
                          </div>
                        </td>
                      ))
                    }
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <div className="guess-panel">
              <div id="guest-spy-panel" className="cst-input">
                <input id="guest-spy-word" type="text" name="word-tip" id="word-tip" required maxLength={25} />
                <input id="guest-spy-count" type="number" name="words-count" id="words-count" min={1} max={9} defaultValue={1} required />
                <input type="button" value="Намекнуть" />
              </div>
              <div id="guest-operative-panel" className="tip-box cst-blue">
                <div id="guest-operative-word" className="tip-message cst-tip">hello</div>
                <div id="guest-operative-count" className="match-word-count cst-tip">5</div>
              </div>
            </div>
          </div>
          <div className="blue-team">
            <div className="blue-team-panel cst-panel">
              <div id="blue-cards-counter" className="blue-word-counter">9</div>
              <div>Следователь:</div>
              <div id="blue-operative" className="blue-operative">-</div>
              <input id="blue-operative-btn" type="button" value="буду следователем" />
              <div>Шпион:</div>
              <div id="blue-spy" className="blue-spy">-</div>
              <input id="blue-spy-btn" type="button" value="буду шпионом" />
            </div>
          </div>
        </div>
      </main>
      <script src="../../scripts/game.js" />
    </Layout>
  );
};
