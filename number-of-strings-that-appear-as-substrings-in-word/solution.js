const numOfStrings = function (patterns, word) {
  return patterns.reduce(
    (acc, pattern) => (word.includes(pattern) ? acc + 1 : acc),
    0
  );
};
