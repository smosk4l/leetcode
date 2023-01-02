const selfDividingNumbers = function (left, right) {
  const arr = [];
  for (let i = left; i <= right; i++) {
    const digits = [...(i + "")].map((n) => +n);
    if (digits.includes(0)) continue;
    if (digits.every((n) => i % n === 0)) arr.push(i);
  }
  return arr;
};
