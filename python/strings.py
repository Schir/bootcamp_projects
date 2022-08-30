print("hello world")
print("""string with multiple lines
wow
that's "neat"
""")

def concat_name(name1, name2):
    return name2 + ", " + name1

print(concat_name("First", "Last"))  #> "Last, First"
print(concat_name("John", "Doe"))    #> "Doe, John"
print(concat_name("Mary", "Jane"))   #> "Jane, Mary"

# DO NOT EDIT - Example of a multiline string
print('''
Here is a whole bunch of instruction that you'd better follow if you know what's good for you!

It even includes blank lines. :)
''')

# STEP 1: Write your own print statement on multiple lines
print("""yeah
okay
sure
""")

# DO NOT EDIT
print('***BEFORE***')

# STEP 2: Copy the original multiline print and make it show
# without blank lines at the beginning and the end
print('''
Here is a whole bunch of instruction that you'd better follow if you know what's good for you!

It even includes blank lines. :)
''')

# DO NOT EDIT
print('***AFTER***')
print('''Here is a whole bunch of instruction that you'd better follow if you know what's good for you!

It even includes blank lines. :)''')

# STEP 3: Uncomment the following print command and fix the error
print('What\'s up, doc?')

# STEP 4: Uncomment the following print command and fix the error
print("The poet used \"day\" to mean \"life\".")

# STEP 5: Uncomment the following print command and fix the error
print('The bunny said, \"Let\'s go to the library.\"')

# DO NOT EDIT - Sample debug for an equality operation
num = 5
str = "5"
print('num {0}, str {1}, equal? {2}'.format(num, str, num==str))

# STEP 6: Rewrite the print above in an alternate way using f' on the string
print(f'num {num}, str {str}, equal? {num==str}')


#Create a function that takes two strings as arguments and 
#return either True or False depending on whether the total number of characters 
#in the first string is equal to the total number of characters in the second string.
def compare(str1, str2):
    return (len(str1) == len(str2))
print(compare("AB", "CD"))              #> True
print(compare("ABC", "DE"))             #> False
print(compare("hello", "App Academy"))  #> False


#Create a function that takes in two values, a first name, first and a last name, last. 
#Your function should return the statement "Hi, my name is _______ _______" 
#with the first name and last name values in the the statement.
def format_name(first, last):
    return f'Hi, my name is {first} {last}'
print(format_name("Alex", "Ambrose"))  #> Hi, my name is Alex Ambrose
print(format_name("Amy", "Mayer"))     #> Hi, my name is Amy Mayer
print(format_name("Rick", "Morty"))    #> Hi, my name is Rick Morty

# Create a function called index_string that takes a string as an argument and 
#returns that string from the index of 3, up to (but not including) the end of the string. 
#See the example test cases for expected output.
def index_string(word):
    return word[3:-1]
print(index_string("Alchemy"))     #> hem
print(index_string("Ridiculous"))  #> iculou
print(index_string("Serendipity")) #> endipit

#Declare a variable that contains a string. 
#Then try to change the first letter of the string and print your string.
testStr = "word"
#testStr[0] = 'b'
print(testStr)


# Create a function that returns the index of a given letter in the string.
def index_of(word, letter):
    index = 0
    for let in word:
        if (str.lower(let) == str.lower(letter)):
            return index
        else:
            index += 1
    return -1
print(index_of("Arm", "a"))  #> 0
print(index_of("Pie", "e"))  #> 2
print(index_of("Lucid", "i"))  #> 3
print(index_of("Obvious","u"))  #> 5


#Create a function that takes a string (a random name). 
#If the last character of the name is an "n", return True, otherwise return False.
def is_last_character_n(name):
    return (str.lower(name[-1]) == 'n') 
print(is_last_character_n("Aiden"))  #> True
print(is_last_character_n("Piet"))   #> False
print(is_last_character_n("Bert"))   #> False
print(is_last_character_n("Dean"))   #> True


#Create a function that returns the string "Burp" with the amount of "r's"
#determined by the input parameters of the function.
def long_burp(number):
    return '{:r<{number}}'.format('Bu', number=number+2) + "p"
print(long_burp(3))  #> "Burrrp"
print(long_burp(5))  #> "Burrrrrp"
print(long_burp(9))  #> "Burrrrrrrrrp"


# Create a function that returns a boolean indicating whether the 
#last three letters of the string match the given letters 
#(regardless of the letter's case).
def last_three(word, check):
    return (str.lower(word[-3:]) == str.lower(check))
print(last_three("Power", "wer"))  #> True
print(last_three("Application", "App"))   #> False
print(last_three("Raw", "raw"))   #> True
print(last_three("Bonjour", "OUR"))   #> True


#Create a function that returns whether or not the string is a Palindrome.
import math
def is_palindrome(word):
    index=0;
    for let in word[0:(math.ceil((len(word)/2)))]:
        if(word[index] != word[-index-1]):
            return False
        index += 1
    return True
print(is_palindrome("kayak")) # True
print(is_palindrome("app"))  # False
print(is_palindrome("racecar")) # True
print(is_palindrome("valid")) # False


#Create a function that reverses the string using recursion.
    #christ it's been a while since I've worked with recursion
    #let's see. I basically just want to call the function until it returns the base case at word[0], but I can't just add an index in the call.
    #so I'd want some way of reducing the size of the input string on each call while increasing the size of the output string
    #something like returning word[-1] + recursive_string(word[0:-2])
    #ah okay, that throws an index out of bound exception. Let's just try word[-1] + word[0:-1] then.
    #alright that works. wonder if that [first:last] notation stops it at the index right before last. 
def recursive_string(word):
    if(len(word)==1):
        return word
    else:
        return word[-1] + recursive_string(word[0:-1])
print(recursive_string("civic")) # civic
print(recursive_string("refer")) # refer
print(recursive_string("string")) # gnirts
print(recursive_string("avocado")) # odacova
print(recursive_string("application")) # noitacilppa
