const pivotInteger = function (n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  for (let i = 0; i <= n; i++) {
    const a = arr.slice(0, i).reduce((acc, n) => acc + n, 0);
    const b = arr.slice(i - 1).reduce((acc, n) => acc + n, 0);

    if (a === b) return i;
  }
  return -1;
};
