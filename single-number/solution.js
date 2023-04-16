const singleNumber = function (nums) {
  return nums.reduce((num, acc) => num ^ acc);
};
