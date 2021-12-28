function selectionSort(arr) {
  let change;
  do {
    change = 0;
      for (i=0; i<arr.length; i++) {
        if (arr[i] > arr[i+1]) {
          let x = arr[i];
          arr[i] = arr[i+1]
          arr[i+1] = x
          change++
        }
      }
  } while (change > 0)
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [3, -3, 4, 6, 10, 2, -5, 5]");
  console.log("=>", selectionSort([3, -3, 4, 6, 10, 2, -5, 5]));

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const stopWatch = Date.now();

  for (let i = 0; i < 1000; i++) {
    selectionSort([1,2])
    selectionSort(longInput)
  }
 
  console.log("time = " + (Date.now() - stopWatch) / 1000)

}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

//arrange values of array from smallest to largest.
//repeatedly finds smaller value and puts it in right location

//---------------------

//compare two array values, move larger of the 2 values right in array order.
//repeat process untill a variable equal 0 to indicate no more changes.
