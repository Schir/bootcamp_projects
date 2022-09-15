//alright, let's make a basic lights out model. how should this work.

//well, first let's start with the pseudocode description.

//lights out is a game where the goal is to turn off every light from some initial starting state.
//when you select an element in the grid, you invert its current state, and then invert the state of each of the four elements adjacent to it.

//need these imports for some initial board randomization and text input
extern crate rand;
#[macro_use]extern crate text_io;
use rand::prelude::*;

//making a point primitive because I'm referencing two variables at a time a bunch.
#[derive(Debug)]
struct Point {
    x:usize,
    y:usize
}

fn main()
{
    //create the game board, with an arbitrary size of five
    let mut board: [[bool; 5];5] = [[true;5];5];
    //modify the initial state to make the game interesting
    board = initialize_board(board);
    
    //show the initial state
    draw_board(&mut board);
    //as long as one element is true, continue input
    while lights_on(&board)
    {
        //get user input
        get_user_input(&mut board);
        //update state
        draw_board(&mut board);
    }
}

//this is where the board's initial state is set. it returns the board.
fn initialize_board(mut board:[[bool;5];5]) -> [[bool;5];5]
{
    //just run through all the elements in the board
    for i in 0..board.len()
    {
        for j in 0..board.len()
        {
            //and then randomly turn buttons on or off
            board[i][j] = rand::random::<bool>();
        }
    }
    //return the board.
    return board;
}

//check if the game's still going
fn lights_on(board: &[[bool;5];5]) -> bool
{
    for i in 0..board.len()
    {
        for j in 0..board[i].len()
        {
            //if there's a value that's true, then a light's still on
            if board[i][j]
            {
                return true;
            }
        }
    }
    //if it hasn't returned true by now, the game is over
    return false;
}

//check the adjacent pieces
fn check_adjacent(board: &mut [[bool;5];5], xy: Point)
{
    //make a list of valid positions and then check each of the cardinal directions to see if it's an edge or not
    let mut valid: Vec<Point> = Vec::new();
    //up
    //I'd check if x-1 < 0, but that's a condition that's only true if x is 0, and it throws an error if I do that 
    //so I just check if x > 0 instead since that gives the same result without trying to underflow usize
    if xy.x > 0
    {
        valid.push(Point{x: xy.x-1, y: xy.y});
    }
    //down
    if xy.x + 1 < board.len()
    {
        valid.push(Point{x: xy.x+1, y: xy.y});
    }
    //left
    if xy.y > 0
    {
        valid.push(Point{x: xy.x, y: xy.y-1});
    }
    //right
    if xy.y + 1 < board.len()
    {
        valid.push(Point{x: xy.x, y: xy.y+1});
    }
    //after putting in all the valid adjacent positions, iterate over them
    for i in 0..valid.len()
    {
        //and toggle each one accordingly
        toggle(board, &valid[i]);
    }

}

//draw the board
fn draw_board(board: &mut [[bool;5];5])
{
    //to make it clearer, i'll be representing on/off with 1/0, so this is just making a string that shows that
    let mut draw: String  = String::new();
    for i in 0..board.len()
    {
        for j in 0..board[i].len()
        {
            
            if board[i][j] == false
            {
                draw.push_str("0");
            }
            else 
            {
                draw.push_str("1");    
            }
        }
        //and at the end of each row, add a newline
        draw.push_str("\n");
    }
    //and then draw the board
    println!("{}", draw);
}

fn get_user_input(board: &mut [[bool;5];5])
{
    println!("enter the x coordinate (0 - 4):\n");
    let mut buffer = String::new();
    let mut user_x: usize = 5;
    while user_x > 4
    {
        buffer.clear();
        std::io::stdin().read_line(&mut buffer);
        let dummyStr = buffer.trim();
        user_x = dummyStr.parse().unwrap();
    }
    println!("enter the y coordinate (0 - 4):\n");
    let mut user_y: usize = 5;
    while user_y > 4
    {
        buffer.clear();
        std::io::stdin().read_line(&mut buffer);
        let dummyStr = buffer.trim();
        user_y = dummyStr.parse().unwrap();
    }
    let coord: Point = Point{x: user_y, y: user_x};
    println!("coord value:{:?}", coord);
    toggle(board, &coord);
    check_adjacent(board, coord);

}

fn toggle(board: &mut [[bool;5];5], coord: &Point) -> [[bool;5];5]
{
    board[coord.x][coord.y] = !board[coord.x][coord.y];
    return *board;
}
