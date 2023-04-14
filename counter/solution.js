const createCounter = function (n) {
  return function () {
    return console.log(n++);
  };
};

const counter = createCounter(10);
counter(); // 10
counter(); // 12
counter(); // 13
