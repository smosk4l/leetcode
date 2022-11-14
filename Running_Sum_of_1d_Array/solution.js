var runningSum = function (nums) {
  const arr = [];
  let counter = 0;
  for (let index = 0; index < nums.length; index++) {
    counter += nums[index];
    arr.push(counter);
  }
  return arr;
};
