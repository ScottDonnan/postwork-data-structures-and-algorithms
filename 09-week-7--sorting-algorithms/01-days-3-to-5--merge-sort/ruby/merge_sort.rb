def merge(arr1, arr2)
  # type your code in here
  # initialize array for merge
  # while arr1 or arr2 contains some elem
  # compare arr1[0] and arr2[0]
    # if arr1 is < arr2
    # remove arr1[0] from arr and push to result array
    # otherwise remove and push arr2[0]

  result = [];
  while arr1.length > 0 && arr2.length > 0
    if arr1[0] < arr2[0]
      result.push(arr1.shift)
    else
      result.push(arr2.shift)
    end
  end
  
  result + arr1 + arr2
end

def merge_sort(arr)
  # type your code in here
  # reduce arr into 2 sorted arrays of 1 element and then call merge on those 2 arrays
  # can do this over and over with recursion
  # arr.length / 2
  # arr1 = from arr[0] to arr.length/2

  #base case
  if arr.length < 2
    return arr
  end
  
  middle = arr.length/2
  left = merge_sort(arr[0...middle])
  right = merge_sort(arr[middle..arr.length-1])

  # left = merge_sort(arr[0...middle])
  # right = merge_sort(arr[middle..-1])

  merge(left, right)
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [1, 2]"
  puts "=>", merge_sort([2, 1])

  puts

  puts "Expecting: [1, 2, 3]"
  puts "=>", merge_sort([1, 2, 3])

  puts

  puts "Expecting: [-10, 0, 2, 2, 5, 10, 20]"
  puts "=>", merge_sort([10, -10, 0, 2, 20, 5, 2])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
