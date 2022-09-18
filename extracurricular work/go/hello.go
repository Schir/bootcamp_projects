package main

import (
	"fmt"
	"math"
	"math/rand"
	"time"
)

// functions work like this
// successive variables of the same type can have the type omitted until the last one
func add(x, y int) int {
	return x + y
}

// functions can return multiple variables
func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	//utf-8 support is built in by default
	fmt.Println("おはよう、ベトナムw")

	fmt.Println("The time is", time.Now())
	rand.Seed(time.Hour.Nanoseconds())
	//declare and initialize a variable
	var n int = rand.Intn(20)
	//if statements don't need parentheses
	if n >= 10 {
		fmt.Println("you have rolled: ", n)
		fmt.Println("the grue lashes out from the darkness, but you deftly evade its bite")
		//else statements need to be formatted like this or else gofmt gets mad
	} else {
		fmt.Println("you have rolled: ", n)
		fmt.Println("you have been eaten by a grue.")
	}
	//%g is the default formatting for floats
	fmt.Printf("now you have %g problems.\n", math.Sqrt(7))
	fmt.Printf("pi is %g\n", math.Pi)
	//call function
	fmt.Println(add(64, 360))
	//initialize multiple variables at once
	h, w := "hello", "world"
	fmt.Println(h, w)
	//short variable initialization (only available in functions)
	h, w = swap(h, w)
	fmt.Println(h, w)
}
