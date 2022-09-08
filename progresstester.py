#using regex to sift through text quickly
import re

#opening the document
with open('progressdoc.txt') as f:
    #looking for text that matches "X / Y" as a number. this is the "X /" part
    progress = re.findall("[0-9]* \/", f.read())
    #reached the end of the file, going back to the start
    f.seek(0)
    #see above, this is matching "/ Y"
    total = re.findall("\/ [0-9]*", f.read())

    #dummy iteration variable because I need to keep track of the index and I can't write a for(int i=0; i<length;i++) thing in python
    iterator = 0
    #making a string to keep track of the Xs
    progresstotal = '[0, '
    #stripping out the " /" part of the first strings I got earlier
    for i in progress:
                                        #   this part is looking for the start of the string to two places before the end, and then adding
                                        #   some formatting to make it easier to parse as a list later
        progresstotal += progress[iterator][:-2] + ', '
        iterator += 1
    #closing out the list formatting
    progresstotal += ']'

    #same as above
    totaltotal = '[0'
    iterator = 0
    for j in total:
        totaltotal += ','+ total[iterator][1:]
        iterator += 1
    totaltotal += ']'
    #parsing the formatted text as a list. did i need to add the brackets if I was just going to delete them later?
    #I don't know but it wasn't working when I tried to just split it normally
    list1 = totaltotal.strip('][').split(', ')

    #these next two are parsing through the lists and adding up the total count of things that have been done and which need to be done.
    sumtotal = 0
    for i in list1:
        if(i != ''):
            sumtotal += int(i)

    list2 = progresstotal.strip('][').split(', ')
    progressum = 0
    for i in list2:
        if(i != ''):
            progressum += int(i)
    index2 = 0
    completedCount = 0
    for i in list2:
        if(i != ''):
            if((list1[index2] == list2[index2]) and (i!=0)):
                completedCount = completedCount+1
        index2 = index2+1

    #and then it ends by printing all that stuff I did above to the console.
    last = "lesson progress: "
    last += str(progressum) + " / " + str(sumtotal)

    print(last)
    print( "modules clear:    " + str(completedCount) + " / " + str(iterator))
    #getting a rough percentage approximation by doing a type conversion from int to float, dividing them, and then rounding it off to two decimal places
    print("percent clear: " + str(round(float(progressum) / float(sumtotal) * 100, 2)) + "%")

    #and the file's still open so let's go and close that.
    f.close()
