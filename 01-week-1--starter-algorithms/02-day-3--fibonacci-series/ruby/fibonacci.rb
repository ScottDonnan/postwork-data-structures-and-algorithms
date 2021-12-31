def fibonacci(num)
  fib = Array.new
  for i in 0..num do
    if i == 0
      fib[0] = 0
    elsif i == 1
      fib[1] = 1
    else
      fib[i] = fib[i-2] + fib[i-1]
    end
  end
  fib[num]
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(9)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  puts "Expecting: ?"
  puts "=>", fibonacci(11)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
