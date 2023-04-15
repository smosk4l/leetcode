const romanToInt = function (s) {
  let counter = 0;
  const romansToNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const letters = s.split("");

  for (let i = 0; i < letters.length; i++) {
    const num = romansToNumber[letters[i]];
    const nextNum = romansToNumber[letters[i + 1]] || 0;

    if (num >= nextNum) counter += num;
    else counter -= num;
  }
  return counter;
};
