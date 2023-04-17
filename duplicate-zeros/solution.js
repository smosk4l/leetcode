const duplicateZeros = function (arr) {
  if (!arr.includes(0)) return arr;

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if (arr[i] === 0) newArr.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = newArr[i];
  }

  return arr;
};

// Test cases
// 1.
duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
// 2.
duplicateZeros([1, 2, 3]);
