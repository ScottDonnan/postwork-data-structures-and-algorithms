function balancingParentheses(string) {
    let opening = 0;
    let missing = 0;

    for (i=0; i<string.length; i++) {
      if (string[i] === '(') {
        opening++
      } else {
        if (opening > 0) {
          opening--
        } else {
          missing++
        }
      }
    }
    return opening + missing;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));

  console.log("Expecting: 2");
  console.log(balancingParentheses(')('))

  console.log("Expecting: 1");
  console.log(balancingParentheses(')()'))

  console.log("Expecting: 2");
  console.log(balancingParentheses(')((((()))((())))()(()))('))
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
  //loop through string
  //count each "(" and ")"
  //subtract the difference
  //return difference
// And a written explanation of your solution
