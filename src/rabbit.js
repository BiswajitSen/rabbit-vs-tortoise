const { tick } = require('./utils.js');

class Rabbit {
  #name
  #position
  #speed
  #isSleeping

  constructor() {
    this.#name = 'rabbit';
    this.#position = 0;
    this.#speed = 1.5;
    this.#isSleeping = false;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  updatePosition() {
    if (!this.#isSleeping) this.#position += this.#speed;
  }

  sleep() {
    this.#isSleeping = true;
    const hibernationPeriod = Math.floor(Math.random() * 10);
    tick(this.#wakeUp.bind(this), hibernationPeriod);
  }

  #wakeUp() {
    this.#isSleeping = false;
  }

}

exports.Rabbit = Rabbit;
