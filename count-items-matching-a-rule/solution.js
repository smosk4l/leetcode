const countMatches = function (items, ruleKey, ruleValue) {
  let option;
  let counter = 0;
  switch (ruleKey) {
    case "type":
      option = 0;
      break;
    case "color":
      option = 1;
      break;
    case "name":
      option = 2;
      break;
    default:
      break;
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i][option] === ruleValue) counter++;
  }
  return counter;
};

// // Test 1
// const items = [
//   ["phone", "blue", "pixel"],
//   ["computer", "silver", "lenovo"],
//   ["phone", "gold", "iphone"],
// ];
// const ruleKey = "color";
// const ruleValue = "silver";
// // Test 2
// const items = [
//   ["phone", "blue", "pixel"],
//   ["computer", "silver", "phone"],
//   ["phone", "gold", "iphone"],
// ];

// const ruleKey = "type";
// const ruleValue = "phone";

console.log(countMatches(items, ruleKey, ruleValue));
