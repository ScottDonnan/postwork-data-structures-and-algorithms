def find_first_duplicate(arr)
  count_hash = {}
  arr.each do |val|
    count_hash[val] ||= 0
    count_hash[val] = count_hash[val] + 1
  end

  the_first_duplicate = -1

  count_hash.each do |key, value|
    if value > 1
      if the_first_duplicate == -1
        the_first_duplicate = key
      end
    end
  end
  the_first_duplicate
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 2"
  puts "=>", find_first_duplicate([2, 2, 3, 3, 2])

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  puts "Expecting: b"
  puts "=>", find_first_duplicate(["a", "b", "b", "c", "a"])
  
  puts "Expecting: for"
  puts "=>", find_first_duplicate(["for", "two", "for"])
  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# given an array, return the first duplicate value that occurs
# if no duplicates return -1

# count each value in the array
# find first index that value is greater than 1
# return that value
# if all values == 1 return -1

#initialize new hash to count
#loop through argument array

  #newhash[array[i]] ||= 1
  #newhash[array[i]] 

  
