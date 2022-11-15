const numJewelsInStones = function (jewels, stones) {
  let counter = 0;
  for (let i = 0; i < jewels.length; i++) {
    const jewel = jewels[i];
    for (let j = 0; j < stones.length; j++) {
      const stone = stones[j];
      if (jewel === stone) counter += 1;
    }
  }
  return counter;
};
