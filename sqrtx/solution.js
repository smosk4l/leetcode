const mySqrt = function (x) {
  for (let i = 0; i <= x; i++) {
    const n = Math.floor(i * i);
    if (n === x) return i;
  }
  return -1;
};
