const removeElements = function (head, val) {
  const newHead = [];
  for (let index = 0; index < head.length; index++) {
    const element = head[index];
    if (element !== val) newHead.push(element);
  }
  return newHead;
};

console.log(removeElements([1, 2, 3, 4, 5], 1));
console.log(removeElements([], 5));
