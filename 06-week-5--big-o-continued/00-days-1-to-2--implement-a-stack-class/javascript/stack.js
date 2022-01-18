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
      throw new Error("stack full")
    }
  }

  // remove item from top of stack and return it
  pop() {
    return this.stack.pop()
  }

  // return item at top of stack without removing it
  peek() {
    return this.stack[this.stack.length - 1]
  }

  // return true if stack is empty, otherwise false
  isEmpty() {
    if (this.stack.length === 0) {
      return true
    } else {
      return false
    }
  }

  // return true if stack is full, otherwise false
  isFull() {
    if (this.stack.length === this.limit) {
      return true
    } else {
      return false
    }
  }

  // return number of items in stack
  size() {
    return this.stack.length
  }

  // return -1 if item not in stack, otherwise integer representing 
  // how far it is from the top
  search(target) {
    const length = this.stack.length
    let position = -1
    for (let i=0; i<length; i++) {
      if (this.stack[i] === target) {
        position = (length-1) - i
      }
    }
    return position
  }

  // print contents of stack: do not return the stack itself!
  print() {
    let content = ''
    this.stack.forEach(value => {
      content = content + value + ','
    })
    return content
  }
}

if (require.main === module) {
  const stack1 = new Stack();
  console.log(stack1)
  console.log(stack1.isEmpty())
  
  for(i=0; i<8; i++) {
    stack1.push(i)
  }

  console.log("push", stack1)
  console.log("size", stack1.size())
  console.log("pop", stack1.pop())
  console.log(stack1)
  
  console.log("peek", stack1.peek())
  console.log(stack1)

  console.log(stack1.isEmpty())

  console.log(stack1.isFull())

  console.log(stack1.search(5))

  console.log(stack1.print())
  
}

module.exports = Stack;
