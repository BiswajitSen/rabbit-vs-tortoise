const { Game } = require('./src/game.js');
const { Rabbit } = require('./src/rabbit.js');
const { Tortoise } = require('./src/tortoise.js');

const main = () => {
  const rabbit = new Rabbit();
  const tortoise = new Tortoise();
  const moralGame = new Game(rabbit, tortoise, 50);
  moralGame.start();
};

main();