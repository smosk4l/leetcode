const minPartitions = function (n) {
  return Math.max(...n.split("").map((n) => Number(n)));
};
