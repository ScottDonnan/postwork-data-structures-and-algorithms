def find_shortest_string_recursive(arr)
  
  
  return arr[0] if arr[0].length < arr[1].length

  return find_shortest_string_recursive(arr.slice(1, arr.length))

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string_recursive(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string_recursive(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string_recursive(['flower', 'juniper', 'lily', 'dandelion', 'baby'])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
