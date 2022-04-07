function bubbleSort(arr) {
  // type your code here

  for (let j = 0; j < arr.length; j++){

    for (let i = 0; i < arr.length - i; i++) {
      if (arr[i] > arr[i+1]) {
        let second = arr[i+1];
        arr[i + 1] = arr[i];
        arr[i] = second;
      }
    }
  
  }

  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
