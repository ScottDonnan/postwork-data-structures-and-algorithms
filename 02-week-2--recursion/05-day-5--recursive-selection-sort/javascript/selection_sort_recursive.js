function selectionSortRecursive(arr) {
  if (arr.length === 0) {
    return [];
  }

  const min = Math.min(...arr)
  const indx = arr.indexOf(min)
  arr.splice(indx, 1)
  
  const result = selectionSortRecursive(arr)
  result.push(min)
  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
