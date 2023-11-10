const sortByLength = (a, b) => {
  if (a.length === b.length) return ascendingOrder(a, b);

  return a.length - b.length;
};

const ascendingOrder = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

// Use this array to test your code:
const testArray = ["car", "train", "plane", "bike", "skateboard", "jet"];
testArray.sort(sortByLength);
console.log(testArray);

module.exports = sortByLength;
