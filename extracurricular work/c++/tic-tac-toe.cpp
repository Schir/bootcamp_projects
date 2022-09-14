//tic-tac-toe

#include<iostream>
#include<string>
#include<vector>
#include<algorithm>

using namespace std;

//global constants 
const char X = 'X';
const char O = 'O';
const char EMPTY = ' ';
const char TIE = 'T';
const char NO_ONE = 'N';

//function prototypes
void instructions();
char askYesNo(string question);
int askNumber(string question, int high, int low=0);
char humanPiece();
char opponent(char piece);
void displayBoard(const vector<char>& board);
char winner(const vector<char>& board);
bool isLegal(const vector<char>& board, int move);
int humanMove(const vector<char>& board, char human);
int computerMove(vector<char> board, char computer);
void announceWinner(char winner, char computer, char human);

//main function
int main()
{
    //initialize some info. 
    //whose move it is
    int move;
    //the size of the board
    const int NUM_SQUARES = 9;
    //the state of the board, initialized so that everything starts out empty
    vector<char> board(NUM_SQUARES, EMPTY);
    //show the instructions
    instructions();
    //set the piece each player controls
    char human = humanPiece();
    char computer = opponent(human);
    //start with whoever picked X
    char turn = X;
    //show the initial board state
    displayBoard(board);

    //main gameplay loop
    while(winner(board) == NO_ONE)
    {
        //if it's the player's turn,
        if(turn == human)
        {
            //get the player's input
            move = humanMove(board, human);
            //update the board state
            board[move] = human;
        }
        //otherwise, get computer input
        else
        {
            move = computerMove(board, computer);
            board[move] = computer;
        }
        //show the new board state
        displayBoard(board);
        //change the turn
        turn = opponent(turn);
        //repeat
    }
    //say who won
    announceWinner(winner(board), computer, human);
    //exit program
    return 0;
}

//and then break all those moving parts out into their own functions for clarity

void instructions()
{
    cout << "Welcome to tic-tac-toe.\n\n";
    cout << "Make a move by entering a number 0-8. The number\n";
    cout << "corresponds to the desired board position (shown below)\n\n";
    
    cout << " 0 | 1 | 2\n";
    cout << " ---------\n";
    cout << " 3 | 4 | 5\n";
    cout << " ---------\n";
    cout << " 6 | 7 | 8\n\n";
}

char askYesNo(string question)
{
    char response;
    do
    {
        cout << question << " (y/n): ";
        cin >> response;    
    } while (response != 'y' && response != 'n');
    return response;
}

int askNumber(string question, int high, int low)
{
    int number;
    do
    {
        cout << question << " (" << low << " - " << high << "): ";
        cin >> number;
    } while (number > high || number < low);
    return number;
}

char humanPiece()
{
    char go_first = askYesNo("Do you want to go first?");
    if(go_first == 'y')
    {
        cout << "\nAlright, you'll go first.\n";
        return X;
    }
    else
    {
        cout << "\nAlright, I'll go first then.\n";
        return O;
    }
}

char opponent(char piece)
{
    if(piece == X)
    {
        return O;
    }
    else
    {
        return X;
    }
}

void displayBoard(const vector<char>& board)
{
    cout << "\n\t" << board[0] << " | " << board[1] << " | " << board[2];
    cout << "\n\t" << "---------";
    cout << "\n\t" << board[3] << " | " << board[4] << " | " << board[5];
    cout << "\n\t" << "---------";
    cout << "\n\t" << board[6] << " | " << board[7] << " | " << board[8];
    cout << "\n\n";
}

char winner(const vector<char>& board)
{
    const int WINNING_ROWS[8][3] = { {0,1,2},
                                     {3,4,5},
                                     {6,7,8},
                                     {0,3,6},
                                     {1,4,7},
                                     {2,5,8},
                                     {0,4,8},
                                     {2,4,6}};
    const int TOTAL_ROWS=8;
    //if any winning row has three values that are the same(and not EMPTY),
    //then we have a winner
    for(int row=0; row<TOTAL_ROWS; row++)
    {
        if( (board[WINNING_ROWS[row][0]] != EMPTY) &&
            (board[WINNING_ROWS[row][0]] == board[WINNING_ROWS[row][1]]) &&
            (board[WINNING_ROWS[row][1]] == board[WINNING_ROWS[row][2]]) )
        {
            return board[WINNING_ROWS[row][0]];
        }
    }
    if(count(board.begin(),board.end(),EMPTY) == 0)
    {
        return TIE;
    }
    return NO_ONE;
}

bool isLegal(int move, const vector<char>& board)
{
    return (board[move] == EMPTY);
}

int humanMove(const vector<char>& board, char human)
{
    int move = askNumber("Where will you move?", (board.size()-1));
    while(!isLegal(move, board))
    {
        cout << "\nThat square is already occupied.\n";
        move = askNumber("Where will you move?", (board.size()-1));
    }
    cout << "\nUnderstood.\n";
    return move;
}

int computerMove(vector<char> board, char computer)
{
    unsigned int move=0;
    bool found = false;
    //if computer can win on the next move, do that
    while (!found && move < board.size())
    {
        if(isLegal(move, board))
        {
            board[move] = computer;
            found = winner(board) == computer;
            board[move] = EMPTY;
        }
        if(!found)
        {
            move++;
        }
    }
    //otherwise, if human can win on next move, stop that
    if(!found)
    {
        move = 0;
        char human = opponent(computer);
        while(!found && move < board.size())
        {
            if(isLegal(move, board))
            {
                board[move] = human;
                found = winner(board) == human;
                board[move] = EMPTY;
            }
            if(!found)
            {
                move++;
            }
        }
    }
    //otherwise, move to the best open square
    if(!found)
    {
        move = 0;
        unsigned int i = 0;
        const int BEST_MOVES[] = {4,0,2,6,8,1,3,5,7};
        while(!found && i < board.size())
        {
            move = BEST_MOVES[i];
            if(isLegal(move, board))
            {
                found = true;
            }
            i++;
        }
    }
    cout << "I think that I'll make a move at square number " << move << endl;
    return move;
}

void announceWinner(char winner, char computer, char human)
{
    if(winner == computer)
    {
        cout << winner << " has won.\n";
        cout << "Looks like I won this time.\n";
    }
    else if (winner == human)
    {
        cout << winner << " has won.\n";
        cout << "You won this time.\n";
    }
    else
    {
        cout << "It's a draw.\n";
    }
}
