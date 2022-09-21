/*  Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that 
    each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid 
    all contain all of the numbers from 1 to 9 one time.

    Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle 
    according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.*/
bool Sudoku(char[][] grid) {
    //alright, this is messy but it works.
    //start by initializing the variable to be returned
    bool retbool = true;
    //this bit's setting up each of the column/row/3x3 subregion validities
    int[,] grid2 = new int[9,9];
    int[,] grid3 = new int[9,9];
    int[,] grid4 = new int[9,9];
    //I needed a way to check the 3x3 subregion so I set up these two variables to increment and check the subregion without adding another for loop
    int dumb = -1;
    int dumb2 = 0;
    for(int i=0; i<grid.Length;i++)
    {
        //increment the subregion vertically
        if(i%3==0 && i!=0){
            dumb2+=2;    
        }
        //set current subregion
        dumb = i/3 + dumb2-1;
        
        for(int j=0;j<grid[i].Length;j++)
        {
            //if it's time to increment the 3x3 subregion,
            if(j%3==0)
            {
                //increment the subregion horizontally
                dumb++;
            }
            //if there's a number in the position we're checking,
            if(grid[i][j]!= '.')
            {
                //extract that number into a usable positional int
                int k = grid[i][j]-'0'-1;
                //increment the number in each of the areas by one
                grid2[i,k]++;
                grid3[j,k]++;
                grid4[dumb,k]++;
            }
        }
    }
    //now we go over the grid again
    for(int i=0;i<grid.Length;i++)
    {
        for(int j=0;j<grid[i].Length;j++)
        {
            //and check if the value at any of the subregions is more than 1
            if(grid2[i,j]>1 || 
            grid3[i,j]>1 ||
            grid4[i,j]>1)
            {
                //if so, it's not a valid sudoku grid
                retbool=false;
            }
        }
    }
    return retbool;
}


/*  A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, 
    such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

    You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. 
    The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], 
    which should be interpreted as the word1 + word2 = word3 cryptarithm.

    If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, 
    becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. 
    If it does not become a valid arithmetic solution, the answer is false.

    Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).
*/
bool isCryptarithmSolution(string[] crypt, char[][] solution) {
    //start by swapping out each of the letters in the string with the chars in the solution
    for(int i=0;i<crypt.Length;i++)
    {
        //make a string to hold values since it won't let me just modify the string 
        string s = "";
        for(int j=0; j<crypt[i].Length;j++)
        {
            //go through the solution letters, find the index where the letter is
            for(int k=0;k<solution.Length;k++)
            {
                //and then add the value to the end of the string
                if(crypt[i][j] == solution[k][0])
                {
                    s += solution[k][1];
                }
            }
        }
        //and then replace the string with the decoded version
        crypt[i] = s;
    }
    for(int i=0;i<crypt.Length;i++)
    {
        //check if any of the numbers start with 0 
        if(crypt[i][0] == '0' && crypt[i].Length > 1)
        {
            //if so, stop
            return false;
        }
    }
    //otherwise, parse the decoded string as an equation
    if(Int64.Parse(crypt[0])+Int64.Parse(crypt[1]) != Int64.Parse(crypt[2]))
    {
        //if the equation isn't valid, return false
        return false;
    }
    //otherwise, it's a cryptarithm
    return true;
}
