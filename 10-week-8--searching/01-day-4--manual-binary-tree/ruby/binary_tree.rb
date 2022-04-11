class Node
  attr_accessor :value, :left, :right
  
  def initialize(value, left = nil, right = nil)
    @value = value;
    @left = left;
    @right = right;
  end
end

# list = [1, 4, 7]
def one_to_seven
  # manually create the BST
  # then return the root node

  return Node.new(7, Node.new(4, Node.new(1)))

end

# list = [10, 40, 45, 46, 50]
def ten_to_fifty
  another_left = Node.new(10);
  left = Node.new(40, another_left);
  another_right = Node.new(50);
  right = Node.new(46, nil, another_right);
  
  root = Node.new(45, left, right);
  
end

# list = [-20, -19, -17, -15, 0, 1, 2, 10]
def negative_to_positive
  root = Node.new(-17, Node.new(-19, Node.new(-20)), Node.new(-15, nil, Node.new(0, nil, Node.new(1, nil, Node.new(2, nil, Node.new(10))))))

end

if __FILE__ == $PROGRAM_NAME
  # Add your own tests if you want
  tree = Node.new(10);
  second_tree = Node.new(20, tree, Node.new(30))

end

# Please add your pseudocode to this file
# And a written explanation of your solution
