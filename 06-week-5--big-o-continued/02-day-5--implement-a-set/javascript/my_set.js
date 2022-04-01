class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    if (typeof iterable === 'string' || Array.isArray(iterable) || iterable === undefined) {
      this.data = {};

      if(iterable) {
        for (let i of iterable) {
          this.data[i] = true;
        }
      }

    } else {
      return 'error'
    }
    //loop through each iterable
    //check if iterable value in this.data === true
    //if not add key value pair
    
  }

  // return number of elements in MySet
  size() {
    return Object.keys(this.data).length
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    this.data[item] = true;
    return this;
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (this.data[item]) {
      delete this.data[item];
      return true;
    } else {
      return false;
    }
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    if(this.data[item]) {
      return true;
    } else {
      return false;
    }
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    let result = [];
    for (let key in this.data) {
      result.push(key)
    }
    return result;
  }
}

if (require.main === module) {
  // add your own tests in here
  const testString = new MySet('pinaple')
  
  console.log(testString)
  console.log(' ')

  console.log(testString.size())
  console.log(' ')

  console.log(testString.add([1,2]))
  console.log(' ')

  console.log(testString.delete('a'))
  console.log(' ')

  console.log(testString)
  console.log(' ')

  console.log(testString.has('10'))
  console.log(' ')

  console.log(testString.entries())
  console.log(' ')
}

module.exports = MySet;

