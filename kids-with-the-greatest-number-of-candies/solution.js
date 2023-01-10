const kidsWithCandies = function (candies, extraCandies) {
  const bestscore = Math.max(...candies);
  return candies.map((el) => (el + extraCandies >= bestscore ? true : false));
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
kidsWithCandies([4, 2, 1, 1, 2], 1);
kidsWithCandies([12, 1, 12], 10);
