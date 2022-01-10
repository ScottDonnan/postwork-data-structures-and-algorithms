function consecutiveSubstrings(string) {
  let stringArry = string.split('')
  let consecArry = []

  stringArry.forEach((letter, idx) => {
    let valueToAdd = letter
    consecArry.push(valueToAdd)
    for (i=idx+1; i<string.length; i++) {
      valueToAdd += stringArry[i]
      consecArry.push(valueToAdd)
    }

  })

  return consecArry
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
