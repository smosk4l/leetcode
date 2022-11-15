const finalValueAfterOperations = function (operations) {
  const lengthAddOperations = operations.filter(
    (item) => item === "X++" || item === "++X"
  ).length;
  const lengthMinusOperations = operations.filter(
    (item) => item === "X--" || item === "--X"
  ).length;
  return lengthAddOperations - lengthMinusOperations;
};
