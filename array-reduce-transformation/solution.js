"use strict";

const reduce = function (nums, fn, init) {
  let counter = init;
  for (let i = 0; i < nums.length; i++) {
    counter = fn(counter, nums[i]);
  }
  return counter;
};

reduce(
  [1, 2, 8, 3, 10, 23],

  function sum(accum, curr) {
    return (curr + accum) % 2;
  },
  25
);
