const percentageLetter = function (s, letter) {
  const lettersArrLength = s.split("").filter((l) => l === letter).length;
  return Math.trunc((lettersArrLength / s.length) * 100);
};
