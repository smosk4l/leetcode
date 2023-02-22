"use strict";
const canBeEqual = function (target, arr) {
  return arr.sort().toString() === target.sort().toString();
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
