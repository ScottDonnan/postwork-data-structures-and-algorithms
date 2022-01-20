class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    this.data = {};
    if (!(typeof iterable === 'string' || iterable === undefined || Array.isArray(iterable))) {
      throw new Error("can't initialize")
    }

    let size;
    iterable !== undefined ? size = iterable.length : size = 0
    //loop through each iterable
    //check if iterable value in this.data === true
    //if not add key value pair
    for (let i = 0; i < size; i++) {
      this.data[iterable[i]] = true
    }
  }

  // return number of elements in MySet
  size() {
    const keys = Object.keys(this.data)
    return keys.length
    
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    this.data[item] = true
    return this
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if(this.data[item]) {
      return delete this.data[item]
    } else {
      return false
    }
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    return !!this.data[item]
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return Object.keys(this.data)
  }
}

if (require.main === module) {
  // add your own tests in here
  const testString = new MySet('pinaple')
  const testArray = new MySet([1,2,2,3,3,4,5,6,6])
  const testNil = new MySet()


  console.log(testString)
  console.log(testArray)
  console.log(testNil)

  console.log('')

  console.log(testArray.size())

  console.log('')

  console.log(testArray.add(20))

  console.log('')

  console.log(testArray.delete(20))
  console.log(testArray.entries())
  console.log(testArray.has(6))
  console.log(testArray.has(66))

  
}

module.exports = MySet;

