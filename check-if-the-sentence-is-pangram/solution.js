const checkIfPangram = function (sentence) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  return alphabet.every((letter) => sentence.includes(letter));
};
