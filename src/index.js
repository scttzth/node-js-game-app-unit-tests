const { generateRandomNumber } = require('./helpers/index');

class Game {
    constructor() {
        this.gameId = generateRandomNumber();
    }
    getGameId() {
        return this.gameId;
    }
}

module.exports = {
    Game
}