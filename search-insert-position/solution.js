const searchInsert = function (nums, target) {
  if (!nums.includes(target)) {
    nums.push(target);
    return nums.sort((a, b) => a - b).findIndex((num) => num === target);
  }

  let isSearching = true;
  let middle = Math.floor(nums.length / 2);

  while (isSearching) {
    if (nums[middle] === target) {
      isSearching = false;
      return middle;
    }

    nums[middle] > target ? middle-- : middle++;
  }
};
