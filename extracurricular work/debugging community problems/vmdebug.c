//this one was running into an issue where one of the switch values wasn't incrementing. on the guy's machine, it was f failing to increment. on mine it was p failing to increment. 

//the main thing I did here was change that char value to be a char array and changing the Drink checks to check the first character in the string 
//so that it doesn't run into some weird edge cases when scanf reads in a string and appends the null character to the end of the input
//also I changed the p,c,s,f declarations to be ints instead of chars, and doubled their letters in case they were reserved constants in stdio. 
//I don't think they were but I may as well be thorough 
#include<stdio.h>

int main()
{
    char Drink[1];
    int pp=0;
    int cc=0;
    int ss=0;
    int ff=0; 
    printf("[MENU - Pepsi(p), Coke(c), Sprite(s), Fanta(f)]\n");
    while(Drink[0]!='q'){
        printf("\nInput drink type (enter q to leave): ");
    
        scanf("%s", Drink);
        switch(Drink[0])
        {
            case 'p':
                pp++;
                break;
            case 'c':
                cc++;
                break;
            case 's':
                ss++;
                break;
            case 'f':
                ff++;
                break;
            default:
                if(Drink[0] != 'q')
                {
                    printf("\n[Try again (input only p,c,s,f)]\n");
                }
                break;
        }
    }
    printf("\n[sales of each drink ]");
    printf("\nPepsi(p): %d\nCoke(c): %d\nSprite(s): %d\nFanta(f): %d\n", pp,cc,ss,ff);
    return 0;
}
