class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  iterate(callback) {
    let node = this.head;
    let idx = 0;

    while (node !== null) {
      callback(node, idx);
      idx++;
      node = node.next;
    }

    return this.head
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate(printNode => console.log(printNode.value))
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let holder = null;
    this.iterate(firstNode => {
      if (firstNode.value === target) {
        holder = firstNode
      }
    })

    return holder;
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    node.next = this.head
    this.head = node
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    
    if(!this.head) {
      this.head = node;
    } else {
      let last;
      this.iterate(currentNode => {
        if (currentNode.next === null) {
          last = currentNode
        }
      })
    last.next = node
    }
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    let removed = this.head;
    if(this.head) {
      this.head = this.head.next
      return removed;
    }
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    let tail;
    this.iterate(node => {
      if (!node.next.next) {
        tail = node.next;
        node.next = null;
      }
    })

    return tail;
  }

  // replace the node at the given index with the given node
  replace(idx, node) {
    
    if(idx === 0) {
      node.next = this.head.next;
      this.head = node;
    }

    this.iterate((node1, counter) => {
      if(counter === idx - 1) {
        node.next = node1.next ? node1.next.next : null;
        node1.next = node;
      }
    })
    return node;
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {
    if(idx === 0) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    
    this.iterate((left, counter) => {
      if(counter === idx - 1) {
        node.next = left.next;
        left.next = node;
      }
    })
    return this;
  }

  // remove the node at the given index, and return it
  remove(idx) {
    
    let removed;
    if(idx === 0) {
      let removed = this.head;
      this.head = this.head.next;
      return removed;
    }
    
    this.iterate((node, counter) => {
      if (counter === idx - 1) {
        removed = node.next;
        node.next = node.next.next;
      }
    })

    return removed;
  }

  //empties the list
  clear() {
    this.head = null;
  }
}

if (require.main === module) {
  // add your own tests in here
  // const node = new Node('scott', new Node('jennifer', new Node('clayton')))
  // const list = new LinkedList(node)
  // const drinks = new Node('coffee', new Node('manhattan', new Node('brandy sour')))
  // const drinkList = new LinkedList(drinks)
  const head = new Node('scott', new Node('clayton', new Node('donnan')))
  const list = new LinkedList(head)
  const empty = new LinkedList();

  console.log(list)
  console.log(' ')

  console.log(list.print());
  console.log(' ')

  console.log(list.find('scott'))
  console.log(' ')

  console.log(list.replace(0, new Node('jack')))
  console.log(list.insert(0, new Node('Scott')))
  console.log('')

  console.log(empty.addLast(new Node('test')))
  console.log(empty)
  console.log('');

  console.log(list)
  console.log(list.remove(0))
  console.log(list.remove(1))
  console.log(list);


}

module.exports = {
  Node, LinkedList
};