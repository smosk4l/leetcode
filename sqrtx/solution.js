const mySqrt = function (x) {
  if (x === 0) return 0;
  for (let i = 1; i <= x; i++) {
    const n = Math.floor(i * i);
    if (n === x) return i;
    else if (n > x) return --i;
  }
};
