const isSameAfterReversals = function (num) {
  if (num < 10) return true;

  const reversedNum = [...(num + "")].reverse();
  if (reversedNum[0] === "0") return false;

  return reversedNum === reversedNum.reverse();
};

console.log(isSameAfterReversals(526));
console.log(isSameAfterReversals(1800));
console.log(isSameAfterReversals(0));
