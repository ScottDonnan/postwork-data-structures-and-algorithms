def find_shortest_string(arr)
  shortest = arr[0]
  arr.each do |value|
    if value.length < shortest.length
      shortest = value
    end
  end
  shortest
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  # Don't forget to add your own!

  # BENCHMARK HERE
end

# Please add your pseudocode to this file

# iterate through each string in the array
# find the length of each string
# store length and string in array of hash
# sort hash by smallest to larget
# return value of first hash in array

#--------------------------------------------
# And a written explanation of your solution
