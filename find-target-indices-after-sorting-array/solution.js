const targetIndices = function (nums, target) {
  return nums
    .sort((a, b) => a - b)
    .map((num, index) => (num === target ? index : undefined))
    .filter((notUndefined) => notUndefined !== undefined);
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
