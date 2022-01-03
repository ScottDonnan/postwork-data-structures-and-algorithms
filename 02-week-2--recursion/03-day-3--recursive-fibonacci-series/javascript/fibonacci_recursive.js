function fibonacci(n) {
  if ( n < 2 ) {
    return n;
  } else {
    
  }
  
  const array = [0, 1]
  let sum;  
  sum = array[0] + array[1];
  array[0] = array[1];
  array[1] = sum;

  if (n === 0) {
    return array[0]
  }

  fibonacci(n-1);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("Expecting: 1");
  console.log("=>", fibonacci(3));

  console.log("Expecting: 8");
  console.log("=>", fibonacci(7));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
  //check if argument is 0, 1, or 2, those will always be 0, 1,1 
  //make array of 2
  //sum the values of the array
  //set array[0] === to array[1] and array[1] === sum
  //loop through number of times equal to argument.
  //return sum


// And a written explanation of your solution
