//hangman
//it's hangman

#include<iostream>
#include<string>
#include<vector>
#include<algorithm>
#include<ctime>
#include<cctype>

using namespace std;

int main()
{
    //init
    const int MAX_WRONG = 8;

    //adding words that the program can choose
    vector<string> words;
    words.push_back("GUESS");
    words.push_back("HANGMAN");
    words.push_back("DIFFICULT");
    words.push_back("VIDCON");
    words.push_back("ECTOCOOLER");
    words.push_back("UMU");

    //initializing the RNG
    srand(static_cast<unsigned int>(time(0)));
    //looks like random shuffle is part of <algorithm>
    random_shuffle(words.begin(), words.end());
    
    //setting the word to be the first value after the list's been shuffled.
    const string THE_WORD = words[0];
    //setting up a count of wrong guesses
    int wrong=0;
    //initializing the thing to be displayed as "--------" or however many dashes it'd be for the word
    string soFar(THE_WORD.size(), '-');
    //and setting up a string to contain all the guessed letters
    string used="";

    cout << "Welcome to Hangman. Good luck!\n";

    //main loop
    while((wrong < MAX_WRONG) && (soFar != THE_WORD))
    {
        cout << "\n\nYou have " << (MAX_WRONG - wrong);
        cout << " incorrect guesses left.\n";
        cout << "\nYou've used the following letters:\n" << used << endl;
        cout << "\nSo far, the word is:\n" << soFar << endl;

        //get guess
        char guess;
        cout << "\n\nEnter your guess: ";
        cin >> guess;
        //all the words were initialized as uppercase so we're setting the character guessed to be uppercase
        guess = toupper(guess);
        //setting up a sub-loop to make sure you're putting in unique guesses
        //and it looks like string::npos is the maximum possible value for an unsigned int, which rolls over to -1 for some reason.
        //feel like I remember reading somewhere that the last bit is used to flag whether the int is positive or negative
        while(used.find(guess) != string::npos)
        {
            cout << "\nYou've already guessed " << guess << endl;
            cout << "Enter your guess: ";
            cin >> guess;
            guess = toupper(guess);
        }
        //add the guess to the used letters string
        used += guess;

        //check if the guess has an index in the word and reveal all positions that it's in.
        if(THE_WORD.find(guess) != string::npos)
        {
            cout << "That's right! " << guess << " is in the word.\n";
            //update soFar to include newly guessed letter
            for(int i=0; i< THE_WORD.length(); i++)
            {
                if(THE_WORD[i] == guess)
                {
                    soFar[i] = guess;
                }
            }
        }
        //if it's not, increment the number of wrong guesses
        else
        {
            cout << "Sorry, " << guess << " isn't in the word.\n";
            ++wrong;
        }
        //and then return to the start of the main loop until one of the conditions stops returning true
    }
    //if the player lost, print this
    if(wrong == MAX_WRONG)
    {
        cout << "\nYou've been hanged. Game over.";
    }
    //otherwise congratulate them
    else
    {
        cout << "\nYou got it!";
    }
    //and then tell them what the word was and close the program
    cout << "\nThe word was: " << THE_WORD << endl;
    return 0;
}
