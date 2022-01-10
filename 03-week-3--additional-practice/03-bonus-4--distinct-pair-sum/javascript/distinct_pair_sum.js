function distinctPairSum(arr, k) {
  let pairs = {}
  let newArray = []

  if (arr.length === 0) {
    return pairs
  }

  for (i=0; i<arr.length; i++) {
    if (arr[i] + arr[i+1] === k && 
        pairs[arr[i]] === undefined &&
        pairs[arr[i+1]] === undefined) {
          pairs[arr[i]] = [arr[i], arr[i+1]]
    }
  }

  return Object.values(pairs)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
  //
// And a written explanation of your solution
