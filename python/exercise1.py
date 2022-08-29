#looks like they're asking me to look at this example and see if
#I can figure it out from context (gonna mark their comments with ##)

#let's see here

#so they're passing an input as an int,
## To take input from the user
num = int(input("Enter a number: "))
#and then checking if it's greater than one
if num > 1:
  ## check for factors
  for i in range(2, num):
    #so they're checking to see if num is divisible by anything. 
    if (num % i) == 0:
      # and if it is, saying it's not a (blank) number
      #looks like a prime number checker function to me
      print(num, "is not a _____ number")
      print(i, "times", num//i , "is", num)
      break
    else:
      print(num,"is ______")

else:
  print(num,"is not a _____ number")
