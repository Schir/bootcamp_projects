//WORD JUMBLE

#include<iostream>
#include<string>
#include<cstdlib>
#include<ctime>

using namespace std;
int main()
{
    enum fields {WORD, HINT, NUM_FIELDS};
    const int NUM_WORDS = 5;
    const string WORDS[NUM_WORDS][NUM_FIELDS] = 
    {
        {"wall", "pink floyd's hit album, the"},
        {"glasses", "I need to get a new pair of these"},
        {"labored", "workin' hard?"},
        {"persistent", "keep going"},
        {"jumble", "it's what we've done to this word"}
    };
    enum difficulty { EASY, MEDIUM, HARD, NUM_DIFFERENT_LEVELS};
    //does this work because an enum just stores the values as numbers?
    cout << "there are " << NUM_DIFFERENT_LEVELS << "difficulty levels";
    //I think this is changing the return value to be an unsigned int, for some reason
    //what is this line even doing.
    //let's see, the documentation says you need to do this to initialize the random number generator.
    //and i quote, "In order to generate random-like numbers, srand is usually initialized to some distinctive runtime value,
    //like the value returned by function time (declared in header <ctime>). This is distinctive enough for most trivial randomization needs."
    srand(static_cast<unsigned int>(time(0)));
    int choice = (rand() % NUM_WORDS);
    string theWord = WORDS[choice][WORD];
    string theHint = WORDS[choice][HINT];

    string jumble = theWord;
    int length = jumble.size();
    //jumbling the word;
    for(int i=0; i< length; i++);
    {
        int index1 = (rand() % length);
        int index2 = (rand() % length);
        char temp = jumble[index1];
        jumble[index1] = jumble[index2];
        jumble[index2] = temp;
    }
    cout << "\t\t\tWelcome to Word Jumble!\n\n";
    cout << "Unscramble the letters to make a word.\n";
    cout << "Enter 'hint' for a hint.\n";
    cout << "Enter 'quit' to quit the game.\n";
    cout << "the jumble is: " << jumble;

    string guess;
    cout << "\n\nYour guess: ";
    cin >> guess;

    while ((guess != theWord) && (guess != "quit"))
    {
        if(guess == "hint")
        {
            cout << theHint;
        }
        else
        {
            cout << "Sorry pal, that's not it.";
        }
        cout << "\n\n Your guess: ";
        cin >> guess;
    }
    if(guess == theWord)
    {
        cout << "\nThat's it! You got it!\n";
    }
    cout << "\nThanks for playing.\n";
    return 0;
}
