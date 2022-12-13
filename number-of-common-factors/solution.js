const commonFactors = function (a, b) {
  const maxNumber = Math.max(a, b);
  let counter = 0;
  for (let i = 1; i <= maxNumber; i++) {
    if (a % i === 0 && b % i === 0) {
      counter++;
    }
  }
  return counter;
};

console.log(commonFactors(12, 6));
