const subtractProductAndSum = function (n) {
  const str = String(n);
  const arr = str.split("");
  const sum = arr.reduce((acc, el) => Number(acc) + Number(el));
  const multiplication = arr.reduce((acc, el) => Number(acc) * Number(el));
  return multiplication - sum;
};

subtractProductAndSum(234);
