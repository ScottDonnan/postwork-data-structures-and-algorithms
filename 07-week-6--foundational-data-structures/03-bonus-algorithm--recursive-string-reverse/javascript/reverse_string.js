function reverseString(str, count = str.length - 1, newStr = '') {
  // type your code here
  if ( count < 0) {
    return newStr;
  }
  
  newStr = newStr + str[count];

  return reverseString(str, count - 1, newStr);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString('hi'));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString('catbaby'));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
// base case??
  //add a counter, and count down to 0
