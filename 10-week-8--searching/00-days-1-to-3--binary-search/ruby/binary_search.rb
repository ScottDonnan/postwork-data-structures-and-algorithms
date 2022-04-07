def binary_search(arr, target)
  # type your code in here
  return false if arr.empty?

  middle = arr.length / 2;
  middle_value = arr[middle];

  puts arr, middle, middle_value

  return true if middle_value == target;

  if middle_value > target
    return binary_search(arr[0...middle], target)
  else
    return binary_search(arr[middle+1..-1], target)
  end

end

# BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
def binary_search_index(arr, target)
  # type your code in here
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: true"
  puts "=>", binary_search([1, 2, 3], 3)

  puts

  puts "Expecting: false"
  puts "=>", binary_search([3, 5, 9], 10)

  # Don't forget to add your own!

  # UNCOMMENT FOR BONUS
  # puts
  # puts "Expecting: 0"
  # puts "=>", binary_search_index([1, 2, 3], 1)

  # puts

  # puts "Expecting: -1"
  # puts "=>", binary_search_index([4, 7, 20], 100)
end

# Add a written explanation of your solution
