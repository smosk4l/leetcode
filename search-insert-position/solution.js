const searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) return middle;
    else if (nums[middle] > target) end = middle - 1;
    else start = middle + 1;
  }
  return start;
};

console.log(searchInsert([1, 3, 5, 6], 4));
