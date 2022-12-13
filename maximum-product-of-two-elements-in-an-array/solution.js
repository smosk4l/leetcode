const maxProduct = function (nums) {
  const a = nums.sort((a, b) => a - b).at(-1);
  const b = nums.sort((a, b) => a - b).at(-2);

  return (a - 1) * (b - 1);
};
