const isPalindrome = function (x) {
  if (x < 0) return false;
  const str = String(x);
  let palindromeStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    palindromeStr += str[i];
  }
  if (Number(palindromeStr) === x) return true;
  return false;
};
