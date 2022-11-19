const numberOfMatches = function (n) {
  let counter = 0;
  while (n > 1) {
    counter += n / 2;
    n /= 2;
  }
  return Math.trunc(counter);
};
