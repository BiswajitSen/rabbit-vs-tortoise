const tick = (callBack, interval) => {
  setTimeout(callBack, interval * 1000);
};

const display = (frame) => {
  console.clear();
  console.log(frame);
};

exports.tick = tick;
exports.display = display;