def fibonacci(n)
  if n < 2
    return n
  end

  values = [0,1]

  (n-1).times do 
    values << values[-1] + values[-2]
  end

  values.last
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  puts "=>", fibonacci(100)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
