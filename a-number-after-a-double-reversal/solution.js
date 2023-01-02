const isSameAfterReversals = function (n) {
  if (n < 10) return true;
  if (n % 10 === 0) return false;
  return true;
};
