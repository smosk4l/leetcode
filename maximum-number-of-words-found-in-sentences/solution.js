const mostWordsFound = function (sentences) {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i].split(" ").length;
    if (sentence > max) max = sentence;
  }
  return max;
};
