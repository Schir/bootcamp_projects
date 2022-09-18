package main

import (
	"fmt"
	"math"
	"math/rand"
	"runtime"
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

type Vertex struct {
	X int
	Y int
}

func main() {
	//defer waits until the rest of the function has returned
	defer fmt.Println("...the aristocrats!")

	//deferred statements are pushed onto a stack
	//they execute in last-in-first-out order
	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}
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

	//for loops
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
	}
	fmt.Println(sum)

	//for is also a while loop. can also just write for{} for an infinite loop
	sum = 1
	for sum < 1000 {
		sum += sum
	}
	fmt.Println(sum)

	fmt.Print("Go runs on ")
	//switch statements don't have break;
	//can't use fallthrough behavior
	//omitting the condition just evaluates to true
	//you can use this to write if/then/else chains more cleanly
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X")
	case "linux":
		fmt.Println("Linux")
	default:
		fmt.Printf("%s.\n", os)
	}
	//pointer initialization
	var pSum *int = &sum
	//pointer value and dereferenced pointer value
	fmt.Println(pSum, *pSum)

	//initializing structs
	v := Vertex{1, 2}
	v.X = 8
	fmt.Println(Vertex{1, 2})
	fmt.Println(v.X)
	//arrays
	var hw [2]string
	hw[0] = "hellllo"
	hw[1] = "worrrld"
	fmt.Println(hw[0], hw[1])
	fmt.Println(hw)
	primes := []int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)
}
