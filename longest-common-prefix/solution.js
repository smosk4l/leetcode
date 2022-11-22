const longestCommonPrefix = function (strs) {
  let prefix = "";
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    for (let j = 0; j < str.length; j++) {
      const letter = str[j];
      console.log(letter);
    }
  }
  // if (!strs.every((str) => str.includes(findFirstPrefix(1))) || strs[0] === "")
  //   return "";

  // if (strs.length === 1 && strs[0].length === 1) return strs[0];

  // let counter = 1;
  // let isSearching = true;
  // while (isSearching) {
  //   const findAllPrefix = strs.every((str) =>
  //     str.includes(findFirstPrefix(counter))
  //   );
  //   if (findAllPrefix) counter++;
  //   else {
  //     counter--;
  //     isSearching = false;
  //   }
  // }
  // return findFirstPrefix(counter);
};

longestCommonPrefix(["flower", "flow", "flight"]);
