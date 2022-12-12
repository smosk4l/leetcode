const sortSentence = function (s) {
  return s
    .split(" ")
    .map((word) => word.padStart(word.length + 1, word.at(-1)))
    .sort()
    .map((word) => word.slice(1, -1))
    .join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
