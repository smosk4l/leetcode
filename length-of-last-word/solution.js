const lengthOfLastWord = function (s) {
  const splitedWords = s
    .trim()
    .split(" ")
    .filter((str) => str);

  return splitedWords.at(-1).length;
};
