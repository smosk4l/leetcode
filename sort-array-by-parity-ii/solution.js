const sortArrayByParityII = function (nums) {
  const result = [];
  const even = nums.filter((n) => n % 2 === 0);
  const odd = nums.filter((n) => n % 2 !== 0);

  for (let i = 0; i < even.length; i++) {
    result.push(even[i]);
    result.push(odd[i]);
  }
  return result;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
