/*Our objective for this project is to build a simple game where the user has to guess a secret number that is chosen at random. \
Upon making a guess, the user will receive a hint indicating if their guess is too small or too large. 
Below is an example of how the final product will play. We've denoted the user's input with *asterisks*. 
All other text is produced by the computer:

Enter a max number: *20*
Enter a min number: *11*
I'm thinking of a number between 11 and 20...
Enter a guess: *15*
Too high.
Enter a guess: *11*
Too low.
Enter a guess: *13*
Too high.
Enter a guess: *12*
Correct!
YOU WON.*/

//alright, shouldn't be too bad.
const prompt = require('prompt-sync')();

function guessingGame()
{
    const max = Number(prompt("Enter a max number: "));
    const min = Number(prompt("enter a minimum number: "));
    const number = Math.floor(Math.random() *(max - min) + min);
    console.log(`I'm thinking of a number between ${min} and ${max}...`);
    let guess = Number(prompt("Enter a guess: "));
    while(guess !== number)
    {
        if(guess < number)
        {
            console.log("Too low.");
        }
        else
        {
            console.log("Too high");
        }
        guess = Number(prompt("Enter a guess: "));
    }
    console.log("Correct!\nYOU WON.");
}

guessingGame();
