const shuffle = function (nums, n) {
  const shuffleArr = [];
  for (let index = 0; index < n; index++) {
    shuffleArr.push(nums[index]);
    shuffleArr.push(nums[index + n]);
  }
  return shuffleArr;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
