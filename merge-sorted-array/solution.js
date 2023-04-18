const merge = function (nums1, m, nums2, n) {
  let arr = [];
  for (let i = 0; i < m; i++) {
    arr.push(nums1[i]);
  }

  for (let i = 0; i < n; i++) {
    arr.push(nums2[i]);
  }
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    nums1[i] = arr[i];
  }
  return nums1;
};

// Test cases
// 1.
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// 2.
merge([1], 1, [], 0);
// 3.
merge([0], 0, [1], 1);
