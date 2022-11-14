const runningSum = function (nums) {
  nums.reduce((acc, num, index, arr) => (arr[index] += acc));
  return nums;
};
