"use strict";

const findNumbers = function (nums) {
  return nums.map((num) => String(num).length).filter((num) => !(num % 2))
    .length;
};
