const { equal, strictEqual } = require('assert');

const { Game } = require('../src/index');

describe('Game Function Group', () => {
  describe('Initialize Game', () => {
    let game;
    beforeEach(() => {
      game = new Game();
    });
    afterEach(() => {
      game = undefined;
    });
    it('Check that the game ID is between 0 and 1000', async function() {
      const gameId = game.getGameId();
      equal(gameId > 0 && gameId < 1000, true);
    });
  });
});