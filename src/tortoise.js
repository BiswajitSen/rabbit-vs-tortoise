class Tortoise {
  #name
  #position
  #speed

  constructor() {
    this.#name = 'tortoise';
    this.#position = 0;
    this.#speed = 1;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  updatePosition() {
    this.#position += this.#speed;
  }

}

exports.Tortoise = Tortoise;