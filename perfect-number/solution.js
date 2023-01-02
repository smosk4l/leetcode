const checkPerfectNumber = function (num) {
  const arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) arr.push(i);
  }
  const sumDivisors = arr.reduce((acc, n) => acc + n, 0);
  if (sumDivisors === num) return true;
  return false;
};

console.log(checkPerfectNumber(28));
