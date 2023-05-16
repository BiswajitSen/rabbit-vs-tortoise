const { tick, display } = require('./utils.js')

class Game {
  #tortoise
  #rabbit
  #trackLength
  #gameId
  #winner

  constructor(rabbit, tortoise, trackLength) {
    this.#rabbit = rabbit;
    this.#tortoise = tortoise;
    this.#trackLength = trackLength;
    this.#gameId = undefined;
    this.#winner = undefined;
  }

  #hasBrokeTape(participant) {
    const hasReachedEnd = participant.position >= this.#trackLength;
    if (hasReachedEnd) this.#winner = participant.name;

    return hasReachedEnd;
  }

  #announceWinner() {
    display(`${this.#winner} won !!!`);
  }

  #gameOver() {
    return this.#hasBrokeTape(this.#rabbit) || this.#hasBrokeTape(this.#tortoise);
  }

  #sprint() {
    return Math.floor(Math.random() * 10);
  }

  #exitGame() {
    clearInterval(this.#gameId);
  }

  #run() {
    this.#rabbit.updatePosition();
    display(this.#render());

    this.#tortoise.updatePosition();
    display(this.#render());

    if (this.#gameOver()) {
      this.#announceWinner();
      this.#exitGame();
    }
  }

  start() {
    this.#gameId = setInterval(() => this.#run(), 350);
    tick(this.#rabbit.sleep.bind(this.#rabbit), this.#sprint());
  }

  #distanceYetToCover(participant) {
    return this.#trackLength - participant.position;
  }

  #createFrame() {
    let frame = '';
    const rabbit = '🐇';
    const tortoise = '🐢';

    frame += rabbit.padStart(this.#distanceYetToCover(this.#rabbit));
    frame += '\n';
    frame += tortoise.padStart(this.#distanceYetToCover(this.#tortoise));

    return frame;
  }

  #render() {
    return this.#createFrame();
  }

}

exports.Game = Game;