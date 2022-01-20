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
      throw new Error('queue full')
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
    return this.queue[0]
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
    if (this.size() >= this.limit) {
      return true
    } else {
      return false
    }
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
    const missing = -1
    if (this.queue.includes(target)) {
      return this.queue.indexOf(target)
    } else {
      return missing
    }
  }

  // print contents of queue: do not return the queue itself!
  print() {
    let queueContent = '';
    this.queue.forEach(value => {
      queueContent += value + ','
    })
    return queueContent
  }
}

if (require.main === module) {
  // add your own tests in here
  testQueue = new Queue()
  console.log("is Empty", testQueue.isEmpty())
  console.log("size", testQueue.size())

  for (let i = 0; i < 9; i++) {
    testQueue.enqueue(i)
  }
  console.log("added numbers", testQueue)
  console.log("dequeue", testQueue.dequeue())
  console.log("dequeue", testQueue.dequeue())
  console.log("dequeue", testQueue.dequeue())
  console.log(testQueue.queue)

  console.log('')

  console.log(testQueue.isFull())

  console.log('')

  console.log(testQueue.search(4))
  console.log(testQueue.search(34))
  console.log(testQueue.search(9))

  console.log('')

  console.log(testQueue.print())


}

module.exports = Queue;
