class Node
  attr_accessor :value, :left, :right

  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end

def level_order_traversal(root)
  # type your code in here
  storage = [];
  result = [root.value];

  if root.left
    storage.push root.left
  end
  
  if root.right
    storage.push root.right
  end

  
  while storage.length > 0
    #take out first value of storage = node;
    #add its left and right nodes to storage if not nil
    #push value of node to result

    node = storage.shift

    if node.left
      storage.push node.left
    end
    
    if node.right
      storage.push node.right
    end

    result.push node.value
  end

  result;
end

if __FILE__ == $PROGRAM_NAME
  root = Node.new(1, Node.new(2), Node.new(3));

  puts "Expecting: [[1], [2, 3]]"
  print level_order_traversal(root)

  puts
  puts

  root = Node.new(1, Node.new(0, Node.new(3), Node.new(4)), Node.new(2, Node.new(5), Node.new(6)))
  puts "Expecting: [[1], [0,2], [3,4,5,6]"
  print level_order_traversal(root)

  puts
  puts

  root = Node.new(10, Node.new(20, Node.new(9), Node.new(22)), Node.new(30))

  puts "Expecting: [[10], [20, 30], [9, 22]]"
  print level_order_traversal(root)

  puts 
  puts

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
