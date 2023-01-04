const minDeletionSize = function (strs) {
  let s = "";
  let x = 0;
  let counter = 0;
  while (x <= strs[0].length - 1) {
    for (let str of strs) {
      s += str[x];
    }
    if (s !== s.split("").sort().join("")) counter++;
    x++;
    s = "";
  }
  return counter;
};

console.log(minDeletionSize(["cba", "daf", "ghi"]));
console.log(minDeletionSize(["a", "b"]));
console.log(minDeletionSize(["zyx", "wvu", "tsr"]));
