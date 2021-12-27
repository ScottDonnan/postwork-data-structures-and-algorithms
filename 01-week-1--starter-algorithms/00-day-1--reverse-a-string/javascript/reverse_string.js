function reverseString(str) {
  let reversed = "";
  for (i=0; i<str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

//initialize new variable string
//loop through str argument
  //add each str letter to the beginning of reversed string variable
//return reversed string

// Please add your pseudocode to this file
// And a written explanation of your solution
