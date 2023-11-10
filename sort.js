const ascendingOrder = (a, b) => {
  return a - b;
};

// Use this array to test your code:
const testArray = [10, 43, 5, 0, -2, -20, 4, 3, 2, 1, 11];
testArray.sort(ascendingOrder);
console.log(testArray);

module.exports = ascendingOrder;
