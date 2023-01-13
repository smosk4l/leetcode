const countDigits = function (num) {
  const str = String(num);
  let counter = 0;
  for (let letter of str) {
    if (num % letter === 0) counter++;
  }
  return counter;
};

countDigits(7);
countDigits(121);
