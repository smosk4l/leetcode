const finalValueAfterOperations = function (operations) {
  let counter = 0;
  for (let index = 0; index < operations.length; index++) {
    if (operations[index] === "++X" || operations[index] === "X++") counter++;
    else counter--;
  }
  return counter;
};
