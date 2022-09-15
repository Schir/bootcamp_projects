//alright, let's make a basic lights out model. how should this work.

//well, first let's start with the pseudocode description.

//lights out is a game where the goal is to turn off every light from some initial starting state.
//when you select an element in the grid, you invert its current state, and then invert the state of each of the four elements adjacent to it.
extern crate rand;
#[macro_use]extern crate text_io;
use rand::prelude::*;

#[derive(Debug)]
struct Point {
    x:usize,
    y:usize
}

fn main()
{
    let mut board: [[bool; 5];5] = [[true;5];5];
    board = initialize_board(board);
    
    draw_board(&mut board);
    while lights_on(&board)
    {
        get_user_input(&mut board);
        draw_board(&mut board);
    }
}


fn initialize_board(mut board:[[bool;5];5]) -> [[bool;5];5]
{
    for i in 0..board.len()
    {
        for j in 0..board.len()
        {
            board[i][j] = rand::random::<bool>();
        }
    }
    return board;
}

fn lights_on(board: &[[bool;5];5]) -> bool
{
    for i in 0..board.len()
    {
        for j in 0..board[i].len()
        {
            if board[i][j]
            {
                return true;
            }
        }
    }
    return false;
}

fn check_adjacent(board: &mut [[bool;5];5], xy: Point)
{
    let mut valid: Vec<Point> = Vec::new();
    //up
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
    println!("valid args: {:?}", valid);
    for i in 0..valid.len()
    {
        println!("valid[i]: {:?}", valid[i]);
        toggle(board, &valid[i]);
    }

}

fn draw_board(board: &mut [[bool;5];5])
{
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
        draw.push_str("\n");
    }
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
