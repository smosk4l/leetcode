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
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  const strCopy = s.slice();
  const letters = strCopy.split("");

  for (let i = 0; i < letters.length; i++) {
    const num = romansToNumber[letters[i]];
    const nextNum = romansToNumber[letters[i + 1]] || 0;

    if (num >= nextNum) counter += num;
    else counter -= num;
  }
  return counter;
};

console.log(romanToInt("III"));
// console.log(romanToInt("IX"));
// console.log(romanToInt("MCMXCIV"));
