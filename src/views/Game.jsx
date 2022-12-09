const React = require('react');
const Layout = require('./Layout');

module.exports = function Lobby({ user, title, wordsGroups }) {
  return (
    <Layout user={user} styles="../../styles/game.css" bootstrap>
      <script src="https://cdn.socket.io/4.5.4/socket.io.min.js" integrity="sha384-/KNQL8Nu5gCHLqwqfQjA689Hhoqgi2S84SNUxC3roTe4EhJ9AfLkp8QiQcU8AMzI" crossOrigin="anonymous" />
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
            <div className="guess-panel" />
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
      <script src="../../scripts/game.js" />
    </Layout>
  );
};
