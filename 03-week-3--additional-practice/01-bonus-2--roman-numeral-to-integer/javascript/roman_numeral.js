function romanNumeral(string) {
  romanNumObj = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
  }

  let numVal = 0;

  for (i=0; i<string.length; i++) {
    let current = romanNumObj[string[i]];
    let previous = romanNumObj[string[i - 1]];
    let added = 0;

    if (current > previous) {
      added = current - previous
      numVal += added - previous
    } else {
      numVal += current
    }
  }

  return numVal;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
    // define variable to hold sum  
    // for (loop through string characters) {
    //   find value of character from Object
    //   add character value to summing variable
    //     if character + 1 is greater than previous character subtract
    //     two characters before adding to sum variable

    // return sum variable
  
// And a written explanation of your solution
