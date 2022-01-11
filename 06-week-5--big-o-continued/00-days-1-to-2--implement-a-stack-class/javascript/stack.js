class Stack {
  constructor() {
    this.stack = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to top of stack if not full
  // if full throw error
  push(item) {
    if(this.stack.length < this.limit) {
      this.stack.push(item)
    } else {
      throw new Error("Error: stack full")
    }

  }

  // remove item from top of stack and return it
  pop() {

  }

  // return item at top of stack without removing it
  peek() {

  }

  // return true if stack is empty, otherwise false
  isEmpty() {

  }

  // return true if stack is full, otherwise false
  isFull() {

  }

  // return number of items in stack
  size() {
    return this.stack.length
  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {

  }

  // print contents of stack: do not return the stack itself!
  print() {
    
  }
}

if (require.main === module) {
  const stack1 = new Stack();
  console.log(stack1)
  
  for(i=0; i<8; i++) {
    stack1.push(i)
  }

  console.log("push", stack1)
  console.log("size", stack1.size())
  
}

module.exports = Stack;
