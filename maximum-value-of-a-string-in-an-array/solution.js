"use strict";

const maximumValue = function (strs) {
  return Math.max(
    ...strs.map((str) => {
      const num = Number(str);
      if (isNaN(num)) return str.length;
      else return num;
    })
  );
};

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));
