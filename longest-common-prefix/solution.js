const longestCommonPrefix = function (strs) {
  const size = strs.length;
  if (size === 0) return "";
  if (size === 1) return strs[0];

  let prefix = "";
  let counter = 0;
  let isSearching = true;

  while (isSearching) {
    if (strs.every((str) => str.startsWith(prefix + strs[0][counter]))) {
      prefix += strs[0][counter];
      counter++;
    } else isSearching = false;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "floight"]));
