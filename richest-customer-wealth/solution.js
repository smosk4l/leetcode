const maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (const acount of accounts) {
    const maximum = acount.reduce((acc, num) => acc + num);
    if (maxWealth < maximum) maxWealth = maximum;
  }
  return maxWealth;
};
