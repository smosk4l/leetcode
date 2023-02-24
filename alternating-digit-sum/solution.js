const alternateDigitSum = function (n) {
  const str = n.toString();

  let score = 0;
  for (let i = 0; i < str.length; i++) {
    const num = Number(str[i]);
    i % 2 === 0 ? (score += num) : (score -= num);
  }

  return score;
};

alternateDigitSum(886996);
