#include<stdio.h>

int main()
{
    //defining some variables
    int weight;
    float mercuryGrav = 0.38;
    float venusGrav = 0.91;
    float earthGrav = 1.0;
    float marsGrav = 0.38;
    float jupiterGrav = 2.34;
    float saturnGrav = 1.06;
    float uranusGrav = 0.92;
    float neptuneGrav = 1.19;
    float planetWeight;
    int planetSelection;

    //i don't want to think too hard later, so I'm jamming all these floats into an array
    float allGrav[8] = {mercuryGrav, venusGrav, earthGrav, marsGrav,  
                        jupiterGrav, saturnGrav, uranusGrav, neptuneGrav};
    //same deal with this. don't want to write a bunch of nested if statements to check for specific conditionals
    int weightClasses[16] = {105, 108, 112, 115, 118, 122, 126, 
                           130, 135, 140, 147, 154, 160, 168,
                           175, 200};
    //gonna be referencing these later. I'd do this as an array of strings, but C doesn't have those so I'm going to be taking the long way around.
    char classNames[159] = "light flyweight super flyweight super bantamweight super featherweight super lightweight super welterweight super middleweight cruiserweight light heavyweight";
    
    //comment from when i was writing it initially
        //god fuck right c doesn't have strings
        //alright, gonna try storing a bunch of offsets
        //I need to have 17 of them I think
    
    //this block is just notes to keep track of what offsets I need.
    //i'm doing this all by hand because I can't think of a better way to do this.
    //there probably is one, but just checking and inputting it manually is easier for something like this
        /*    
        minimumweight, 105 pounds (48 kg)       x
        light flyweight, 108 pounds (49 kg)     x
        flyweight, 112 pounds (51 kg)           x
        super flyweight, 115 pounds (52 kg)     x
        bantamweight, 118 pounds (53.5 kg)      x
        super bantamweight, 122 pounds (55 kg)  x
        featherweight, 126 pounds (57 kg)       x
        super featherweight, 130 pounds (59 kg) x
        lightweight, 135 pounds (61 kg)         x
        super lightweight, 140 pounds (63.5 kg) x
        welterweight, 147 pounds (67 kg)        x  
        super welterweight, 154 pounds (70 kg)  x
        middleweight, 160 pounds (72.5 kg)      x
        super middleweight, 168 pounds (76 kg)  x
        light heavyweight, 175 pounds (79 kg)   x
        cruiserweight, 200 pounds (91 kg)       x
        heavyweight, unlimited
        */
    //storing the offsets of the start and end of each class name in the string 
    //I made above in a grid of the same size as the weightClasses[] array
    //each item is an array of length 2, storing the starting and ending offset of the class name
                                        
                                        //this was annoying and tedious, so I blocked each offset onto its own line to better keep track of what's what.
                                        //tried cutting down on how long the string needed to be in total by using some of the same offsets
                                        //for classes that would otherwise just be a substring (the various classes and their super versions).

    int classReference[16][2] = {{0, 15}, //light flyweight 
                            {6, 15},    //flyweight
                            {16,31},    //super flyweight
                            {38,50},    //bantamweight
                            {32,50},    //super bantamweight
                            {57,70},    //featherweight
                            {51,70},    //super featherweight
                            {77,88},    //lightweight
                            {71,88},    //super lightweight
                            {95,107},   //welterweight
                            {89,107},   //super welterweight
                            {114,126},  //middleweight
                            {108,126},  //super middleweight
                            {141,158},  //light heavyweight
                            {127,141},  //cruiserweight
                            {147,158}   //heavyweight
                           };

    //getting data from the user
    printf("Please enter the current weight in pounds\n");
                //this doesn't work without the & there. I think that's probably a pointer
                //but pointers are forbidden dark arts that I'm going to try not to touch if I can help it
    scanf("%d", &weight);
    //i would've gone and just listed out all the various weights on each of the planets in the output 
    //but i already dealt with strings once and I don't want to do it again
    printf("enter the planet:\n0: Mercury\n1: Venus\n2: Earth\n3: Mars\n4: Jupiter\n5: Saturn\n6: Uranus\n7: Neptune\n");
    scanf("%d", &planetSelection);

    //getting the weight from the gravity array i made earlier
    planetWeight = weight * allGrav[planetSelection];
    //this is apparently just how you check the size of an array in C. not really sure why I need to divide at the end there.
    //actually, let's go and check the documentation.

    //man why'd the tutorial do that division, that seems unnecessary.

    //okay so it looks like sizeof returns the amount of bytes allocated to whatever you're calling it on.
    //in the case of weightClasses, it seems it's being called on an array which has 8 bytes allocated to it, one for each element.
    //I'm going to take a shot in the dark here and say that each element of the array is one byte long and pointing to the address
    //where the reference to the variable is stored. probably.
    //so it's getting that size and then dividing it by the size of the item in the first element of the array, which is a one-byte-long pointer,
    //which returns 1
    //so you're getting the size and then dividing it by one. that's weird. why'd they do it like that.
        //i wonder if this is the sort of thing that makes more sense when you're trying to get the difference between two locations in memory
        //or maybe something to do with the dark god malloc
        //either way, not touching either of those right now
    int weightClassesArraySize = sizeof weightClasses / sizeof weightClasses[0];



    //checking the edge cases
    if(planetWeight < 105)
    {
        printf("your weight there is %f. You would be a minimumweight.\n", planetWeight);
    }
    else if(planetWeight > 200)
    {
        printf("Your weight there is %f. You would be a heavyweight\n", planetWeight);
    }
    //going through the different weight classes
    else
    {
        for(int i=0; i< weightClassesArraySize-1; i++)
        {
            //check if it's lower than the cutoff for the next weight class
            if(planetWeight < weightClasses[i+1])
            {
                //storing the starting offset so i don't have to keep writing this out
                int start = classReference[i][0];
                //ending offset minus the starting offset gives us the length.
                //In an earlier draft I was trying to do this with a sizeof 
                //but I'm realizing while I'm writing this that it would just give me the difference between 0 and 1, 
                //which is why it kept giving me a weird result where it'd get the first letter right and then just give me a bunch of garbled characters   
                int length = classReference[i][1] - classReference[i][0];
                //store this in a string of that length +1 (i'll get to the +1 in a minute)
                char className[length+1];
                //making a substring that has the class name in it
                for(int j = 0; j < length; j++)
                {
                    className[j] = classNames[start+j];
                }
                //this is where that +1 comes in. strings suck ass in C and you've gotta deal with them as char arrays,
                //but if you're dealing with them as char arrays then C has trouble if you try to import them as a string
                //so you've gotta add the string terminator '\0' at the end of it
                //or else you'll get some garbled ascii as the next couple bytes start overflowing into it
                className[length] = '\0';
                printf("Your weight there is %f. You would be a %s \n", planetWeight, className);
                //and then everything's been done so we end the program
                return 0;
            }
        }
    }
}

//I was going to go and use a function call to try and handle the weight-checking logic, but I think it would've added a bunch of unnecessary
//memory allocations to redundant variables, and the program's pretty small overall, so I just went and handled all the logic in main. 
/*
float checkWeight(int earthWeight, float planetGrav)
{
    return earthWeight * planetGrav;
}
*/
