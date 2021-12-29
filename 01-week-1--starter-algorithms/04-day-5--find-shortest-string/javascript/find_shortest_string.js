function findShortestString(arr) {
  let shortestArray = arr[0]
  for (let i=0; i<arr.length; i++) {
    if (arr[i].length < shortestArray.length) {
      shortestArray = arr[i]
    }
  }
  return shortestArray
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  
  const longArray = [];

  for (let i=0; i<100; i++) {
    longArray.push(Math.random())
  }
  const startTime = Date.now()
  for (let i=0; i<1000; i++) {
    findShortestString(['aa', 'bbb'])
    findShortestString(longArray)
  }

  console.log((Date.now() - startTime) / 2000)
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
