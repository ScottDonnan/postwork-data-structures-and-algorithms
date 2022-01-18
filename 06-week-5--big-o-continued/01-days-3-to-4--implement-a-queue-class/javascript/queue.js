class Queue {
  constructor() {
    this.queue = [];
    // this is an arbitrary value to make testing easier
    // 1,024 would be way too high to test!
    this.limit = 10;
  }

  // add item to rear of queue if not full
  // if full throw error
  enqueue(item) {
    if(this.queue.length >= this.limit) {
      throw "error: Queue is full."
    } else {
      this.queue.push(item)
    }
  }

  // remove item from front of queue and return it
  dequeue() {
    return this.queue.shift()
  }

  // return item at front of queue without removing it
  peek() {

  }

  // return true if queue is empty, otherwise false
  isEmpty() {
    if (this.size() > 0) {
      return false
    } else {
      return true
    }
  }

  // return true if queue is full, otherwise false
  isFull() {

  }

  // return number of items in queue
  size() {
    if (this.queue.length > 0) {
      return this.queue.length
    } else {
      return 0
    }
  }

  // return -1 if item not in queue, otherwise integer representing 
  // how far it is from the front
  search(target) {

  }

  // print contents of queue: do not return the queue itself!
  print() {
    
  }
}

if (require.main === module) {
  // add your own tests in here
  testQueue = new Queue()
  console.log("is Empty", testQueue.isEmpty())
  console.log("size", testQueue.size())

  for (let i = 0; i < 10; i++) {
    testQueue.enqueue(i)
  }
  console.log("added numbers", testQueue)
  console.log("dequeue", testQueue.dequeue())
  console.log("dequeue", testQueue.dequeue())
  console.log("dequeue", testQueue.dequeue())
  console.log(testQueue.queue)


}

module.exports = Queue;
