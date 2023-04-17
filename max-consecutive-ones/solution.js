const findMaxConsecutiveOnes = function (nums) {
  const arr = [];
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) counter += 1;
    else {
      arr.push(counter);
      counter = 0;
    }
  }
  arr.push(counter);
  return Math.max(...arr);
};

// Test cases
// 1.
// findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
// 2.
findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]);
