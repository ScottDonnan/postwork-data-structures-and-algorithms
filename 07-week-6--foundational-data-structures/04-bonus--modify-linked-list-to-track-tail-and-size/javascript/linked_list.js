class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = this.length();
    
    if(head) {
      this.tail = this.iterate(node => {
        if(!node.next) {
          return true;
        }
      })
    } else {
      this.tail = null;
    }
  }

  iterate(callback) {
    let count = 0;
    let temp = this.head;

    while (temp !== null) {
      const result = callback(temp, count);

      if (result === true) {
        return temp;
      }

      ++count;
      temp = temp.next;
    }

    return this.head;
  }

  length() {
    let node = this.head;
    let length = 0;

    if(!this.head) {
      return length;
    }

    this.iterate((node, counter) => {
      length = counter;
    })
    
    return length + 1;
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate(node => console.log(node.value));
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let result = null;

    this.iterate(node => {
      if (node.value === target) {
        result = node;

        return true;
      }
    });

    return result;
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    if(!this.head){
      this.tail = node;
    }
    node.next = this.head;
    this.head = node;
    this.size = this.length();
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    this.tail = node;
    if (this.head === null) {
      this.head = node;
      this.size = this.length();
      return;
    }

    this.iterate(currNode => {
      if (currNode.next === null) {
        currNode.next = node;
        this.size = this.length();
        return true;
      }
    });
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    const oldHead = this.head;

    if (this.head !== null) {
      this.head = this.head.next;
    }

    if(!this.head) {
      this.tail = null;
    }

    this.size = this.length();
    return oldHead;
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    if (this.head === null || this.head.next === null) {
      this.tail = null;
      this.size = this.length();
      return this.removeFirst();
    }

    let oldTail = null;

    this.iterate(node => {
      if (node.next.next === null) {
        oldTail = node.next;
        node.next = null;
        this.tail = node;
        return true;
      }
    });

    this.size = this.length();
    return oldTail;
  }

  // replace the node at the given index with the given node
  replace(idx, node) {
    if(!this.head.next) {
      this.tail = node;
    }

    if (idx === 0) {
      this.removeFirst();
      this.addFirst(node);
      return node;
    }

    this.iterate((currNode, count) => {
      if (count === idx - 1) {
        node.next = currNode.next.next;
        currNode.next = node;
        if(!currNode.next.next) {
          this.tail = node;
        }

        return true;
      }
    });

    return node;
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {
    if(!this.head) {
      this.tail = node;
    }

    if (idx === 0) {
      this.addFirst(node);
      this.size = this.length();
      return;
    }

    this.iterate((currNode, count) => {
      if (count === idx - 1) {
        const oldNext = currNode.next;
        currNode.next = node;
        node.next = oldNext;
        if(!oldNext) {
          this.tail = node;
        }

        return true;
      }
    });

    this.size = this.length();
  }

  // remove the node at the given index, and return it
  remove(idx) {

    if (idx === 0) {
      if (!this.head || !this.head.next) {
        this.tail = null;
      }
      this.size = this.length();
      return this.removeFirst();
    }

    let oldNode = null;

    this.iterate((node, count) => {
      if (count === idx - 1) {
        oldNode = node.next;
        if(!node.next.next) {
          this.tail = node;
        }
        node.next = node.next.next;

        return true;
      }
    }); 

    this.size = this.length();
    return oldNode;
  }

  clear() {
    this.head = null;
    this.size = this.length();
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

if (require.main === module) {
  let head = new Node('one', new Node('two', new Node('three', new Node('four'))));
  let list = new LinkedList(head);
  let emptyList = new LinkedList();
  let oneItemList = new LinkedList(new Node('just one'));

  let newList = new LinkedList(new Node('1', new Node('2', new Node('3', new Node('4', new Node('5'))))));
  console.log(newList)
  console.log(newList.tail)
  console.log('')

  console.log(newList.replace(1, new Node('4')))
  console.log(newList);
  console.log('');

  console.log("before remove", newList, newList.length());
  console.log('------------------------------')

  console.log(newList.remove(1));
  console.log(newList.remove(0));

  console.log("final", newList);
}

module.exports = {
  Node, LinkedList
};
