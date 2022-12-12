const smallerNumbersThanCurrent = function (nums) {
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    const smallerNumber = nums.filter((num) => {
      if (num < nums[i]) return nums[i];
    });
    arr.push(smallerNumber.length);
  }
  return arr;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
