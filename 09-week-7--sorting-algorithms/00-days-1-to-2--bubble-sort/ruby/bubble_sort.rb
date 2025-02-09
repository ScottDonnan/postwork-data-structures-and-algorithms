def bubble_sort(arr)
  # type your code in here
  sorted = false

  while(!sorted)
    sorted = true

    arr.each_index do |idx|
      break if idx == arr.length - 1
      
      if arr[idx] > arr[idx + 1]
        second = arr[idx + 1]
        arr[idx + 1] = arr[idx]
        arr[idx] = second
        sorted = false
      end

    end
  end

  arr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [1, 2, 3, 4]"
  print "=> "
  print bubble_sort([3, 2, 1, 4])

  puts

  puts "Expecting: [1, 2, 3]"
  print "=> "
  print bubble_sort([1, 2, 3])

  puts

  puts "Expecting: []"
  print "=> "
  print bubble_sort([])

  puts

  puts "Expecting: [1, 2, 3]"
  print "=> "
  print bubble_sort([2, 3, 1])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
