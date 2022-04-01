class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  iterate(another) {
    let start = this.head

    while (start !== null) {
      another(start)
      start = start.next
    }

    return this.head
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    // function printNode(node){
    //   console.log(node.value)
    // }
    
    this.iterate(printNode => console.log(printNode.value))
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    //iterate through each value and check if it equals the target
    let findNode = null
    this.iterate(firstNode => {
      if (firstNode.value === target) {
        findNode = firstNode
      }
    })

    return findNode;

  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    node.next = this.head
    this.head = node
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    let last
    this.iterate(currentNode => {
      if (currentNode.next === null) {
        last = currentNode
      }
    })
    last.next = node
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {

  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {

  }

  // replace the node at the given index with the given node
  replace(idx, node) {

  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {

  }

  // remove the node at the given index, and return it
  remove(idx) {

  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next
  }
}

if (require.main === module) {
  // add your own tests in here
  // const node = new Node('scott', new Node('jennifer', new Node('clayton')))
  // const list = new LinkedList(node)
  // const drinks = new Node('coffee', new Node('manhattan', new Node('brandy sour')))
  // const drinkList = new LinkedList(drinks)
  const head = new Node('hi again', new Node('but why?'))
  const list = new LinkedList(head)
  // console.log(node)
  // console.log(node.value)
  // console.log(node.next)

  // console.log('')

  // console.log("list head =>", list.head)
  // console.log(list.head.value)
  // console.log(list.head.next.next.value)

  // console.log("drink list head =>", drinkList.head)
  // console.log("drinks =>", drinkList.head.next.next)
    // console.log(list.head.next.value)
    // console.log(list.iterate())
    // console.log(list.print())
    // console.log(list.find("hi again"))
    // console.log(list.find("but why?"))
    // console.log(list.find("test"))
    // console.log(list.find(456))

    console.log("addFirst =>", list.addFirst(new Node('I am first now')))
    console.log("print =>", list.print())
    console.log("addLast =>", list.addLast(new Node('I am last now')))
    console.log("print =>", list.print())


}

module.exports = {
  Node, LinkedList
};