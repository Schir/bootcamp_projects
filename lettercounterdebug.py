#debugging someone's problem on codecademy.

word=input("enter a word ")

def vowelcounter(message):
    amountofvowels = 0
    #their problem was writing word instead of message here
    if " " in message:
        print("only one word please")
    #and also here
    for letter in message:
        if letter in "aeiou":
                        #also writing =+ instead of +=
            amountofvowels += 1
    return amountofvowels

print(vowelcounter(word))
