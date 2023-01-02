const sortArrayByParity = function (nums) {
  const result = [];
  for (let num of nums) {
    if (num % 2 === 0) result.unshift(num);
    else result.push(num);
  }
  return result;
};
