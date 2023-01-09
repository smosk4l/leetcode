const search = function (nums, target) {
  if (!nums.includes(target)) return -1;

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if(nums[middle] === tar)
    else if (nums[middle] < target) start = middle + 1;
    else end = middle - 1;
  }
  return middle;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
