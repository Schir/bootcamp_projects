# Create a function that returns True when num1 is equal to num2; otherwise return False.
def is_same_num(num1, num2):
    return (num1 == num2)
print(is_same_num(4, 8))   #>  False
print(is_same_num(2, 2))   #>  True
print(is_same_num(2, "2")) #>  False


# Create a function that returns True when num1 is NOT equal to num2; otherwise return False.
def not_equal(num1, num2):
    return not(num1 == num2)
print(not_equal(0, 2))   #>  True
print(not_equal(2, 2))   #>  False
print(not_equal(2, "2")) #>  True


# Write a function using the and operator that returns the Boolean result of 
#the and operator being applied to the function's arguments.
def And(op1, op2):
    return op1 and op2
print(And(True, False))    #> False
print(And(True, True))     #> True
print(And(False, True))    #> False
print(And(False, False))   #> False


# Write a function using the not and or operator that returns the 
# Boolean result of the not and or operator being applied to the function's arguments.
def not_or(op1, op2):
    return not op1 or op2
print(not_or(True, False))    #> False
print(not_or(True, True))     #> True
print(not_or(False, True))    #> True
print(not_or(False, False))   #> True


#Create a function that returns True if the length of the list is equal to the given value; 
#otherwise return False.
def length_list(arr, length):
    return len(arr) == length
print(length_list([], 1))   #>  False
print(length_list([], 0))   #>  True
print(length_list([5, 2], 2))   #>  True
print(length_list([1, 4, 3], 4))   #>  False
print(length_list([0, 2, "i", 0.9], 4))   #>  True

#Create a function that returns True if the first divided by the second value 
#results in a remainder; otherwise return False.
def has_remainder(arg1, arg2):
    return not(arg1%arg2 == 0)
print(has_remainder(4, 2))   #>  False
print(has_remainder(57, 4))  #>  True
print(has_remainder(6, 3))   #>  False
print(has_remainder(81, 7))  #>  True


# Create a function that returns the xor result of two values.
def xor(val1, val2):
    #fucking how are you supposed to figure this out from the instructions
    #I had to go and google python xor to figure out this symbol even exists as an operand
    #my first instinct was to just write out
    #return ((val1 or val2) and not (val1 and val2))
    #and that worked for the first four examples there, as it should
    #but it kept returning False for the integer variables 
    #(as it should since those are all read in as True, True, which would xor out to False)
    #but for some reason the output wants you to get the xor value that you'd get if you xor'd each of the bits assigned to the values
    #in kind of that way I scratched out on lines 80-83 down there  
    #now there's a few ways I can think of to approach that, but before I tried any of those I just kept thinking to myself like
    #man, xor's a really common operation right? like I know that that's one of the basic assembly instructions,
    #and surely a higher-level language like python can do it at least as easily as assembly, right?
    #so this has to be simpler than recreating the xor function from scratch right?
    #and it is!
    #but I'm annoyed at the person who wrote this lesson
    return val1 ^ val2
print(xor(False, False))   #>  False
print(xor(True, False))   #>  True
print(xor(True, True)) #>  False
print(xor(False, True))#> True
print(xor(5, 3))  #> 6
#   0101 -> 5
# + 0011 -> 3
#   ----
#   0110 -> 6
#christ that's what it's doing, huh
print(xor(8, 4))  #> 12
print(xor(2, 2))  #> 0
print(xor(1, 2))  #> 3
print(xor(4, 4))  #> 0


# Create a function that uses DeMorgan's Law to get the expected True/False statement.
def de_morgans_law(arg1, arg2):
    #wasn't totally clear what it was trying to ask since deMorgan's law being applied should pretty much always return true
    #like !(arg1 || arg2) || (!arg1 && !arg2) is just going to be (true || true) or (false || false)
    #so the only way this exercise isn't completely pointless would be to check both sides of deMorgan's law with each of the args
    #so !(arg1 || arg1) || (!arg2 && !arg2)
    #at least, that's what gives me something with the correct outputs
    #not exactly sure why they've done this
    #especially since deMorgan's law is about an equality comparison between two sides 
    #so I'd think the answer should be something like
    #(!(arg1 || arg1)) == (!arg2 && !arg2)
    #but it isn't, for some reason.
    #eh, whatever. It works. 
    return ((not(arg1 or arg1)) or (not arg2 and not arg2))
print(de_morgans_law(True, True)) # False
print(de_morgans_law(True, False)) # True
print(de_morgans_law(False, False)) # True
print(de_morgans_law("", [])) # True
print(de_morgans_law(2, 2)) # False
print(de_morgans_law(2, 0)) # True
