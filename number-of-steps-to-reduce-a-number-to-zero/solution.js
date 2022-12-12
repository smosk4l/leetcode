const numberOfSteps = function (num) {
  let counter = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2;
      counter++;
    } else {
      num--;
      counter++;
    }
  }
  return counter;
};

console.log(numberOfSteps(14));
