const convertTemperature = function (celsius) {
  const ans = [];
  ans.push(celsius + 273.15);
  ans.push(celsius * 1.8 + 32);
  return ans;
};
