const { generateRandomNumber, getDate } = require('./helpers/index');

class Game {
    constructor() {
        this.id = generateRandomNumber();
        this.date = getDate();
    }
    start() {
        this.players = {
            you: 'Player 1',
            opponent: 'Player 2'
        };
    }
    stop() {
        this.players = {};
    }
}

module.exports = {
    Game
}