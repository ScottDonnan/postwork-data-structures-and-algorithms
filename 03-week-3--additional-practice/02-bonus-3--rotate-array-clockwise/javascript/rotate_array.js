function rotateArray(arr, k) {
  if (arr.length === 0) {
    return arr
  }
  for (i=0; i<k; i++) {
    let lastValue = arr.pop()
    arr.unshift(lastValue)
  }

  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 21));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
