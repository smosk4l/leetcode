const isPalindrome = function (x) {
  if (x < 0) return false;

  const xStr = String(x);
  let left = 0;
  let right = xStr.length - 1;

  while (left < right) {
    if (xStr[left] !== xStr[right]) return false;
    left++;
    right--;
  }
  return true;
};
