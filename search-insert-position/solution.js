const searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (nums[middle] === target) return middle;
    if (nums[middle] < target) low = middle + 1;
    if (nums[middle] > target) high = middle - 1;
  }
  return low;
};
