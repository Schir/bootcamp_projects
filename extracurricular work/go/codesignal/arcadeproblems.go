package codesignal

// Write a function that returns the sum of two numbers.
func add(param1 int, param2 int) int {
	return param1 + param2
}

/*
Given a year, return the century it is in.

	The first century spans from the year 1 up to and including the year 100,
	the second - from the year 101 up to and including the year 200, etc.
*/
func centuryFromYear(year int) int {
	return ((year - 1) / 100) + 1
}

// Given the string, check if it is a palindrome.
func checkPalindrome(inputString string) bool {
	retBool := true
	for i := 0; i < len(inputString)/2; i++ {
		if inputString[i] != inputString[len(inputString)-1-i] {
			retBool = false
		}
	}
	return retBool
}

/*
Given an array of integers, find the pair of adjacent

	elements that has the largest product and return that
	product
*/
func adjacentElementsProduct(inputArray []int) int {
	var maxSoFar int = inputArray[0] * inputArray[1]
	for i := 0; i < len(inputArray)-1; i++ {
		if inputArray[i]*inputArray[i+1] > maxSoFar {
			maxSoFar = inputArray[i] * inputArray[i+1]
		}
	}
	return maxSoFar
}

/*
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

	A 1-interesting polygon is just a square with a side of length 1.
	An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.
	You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

	EXAMPLE:
	    For n = 2, the output should be
	    solution(n) = 5;
	    For n = 3, the output should be
	    solution(n) = 13.
	    For n = 3, the output should be
	    solution(n) = 25
*/
func shapeArea(n int) int {
	//this looks like it's just n^2 + (n-1)^2, so just return that
	return (n * n) + (n-1)*(n-1)
}

/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence

	by removing no more than one element from the array.

	Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an.
	Sequence containing only one element is also considered to be strictly increasing.
*/
func almostIncreasingSequence(sequence []int) bool {
	//set this value now to make things easier to read
	l := len(sequence)
	for i := 0; i < len(sequence)/2+1; i++ {
		//check two slices of the array at once because it fails the tests if I don't
		if checkAlmostIncreasing(sequence[0:i], sequence[i+1:]) || (checkAlmostIncreasing(sequence[0:l-i-1], sequence[l-i:])) {
			return true
		}
	}
	return false
}
func checkAlmostIncreasing(slice1 []int, slice2 []int) bool {
	//make an array without one value
	var k = make([]int, len(slice1)+len(slice2))
	_ = copy(k, slice1)
	_ = copy(k[len(slice1):], slice2)
	//check if all the values are increasing
	for i := 1; i < len(k); i++ {
		if k[i] <= k[i-1] {
			return false
		}
	}
	return true
}

/*
After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost,

and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious,
they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

Given matrix, a rectangular matrix of integers, where each value represents the cost of the room,
your task is to return the total sum of all rooms that are suitable for the CodeBots
(ie: add up all the values that don't appear below a 0).

Example

	For

	matrix = [[0, 1, 1, 2],
	        [0, 5, 0, 0],
	        [2, 0, 3, 3]]

	the output should be
	solution(matrix) = 9.

Guaranteed constraints:
1 ≤ matrix.length ≤ 5,
1 ≤ matrix[i].length ≤ 5,
0 ≤ matrix[i][j] ≤ 10.
*/
func matrixElementsSum(matrix [][]int) int {
	//since I know matrix[i] has a length of less than five, i'm just creating an array of length 5 with all the values initialized to 1
	haunted := []int{1, 1, 1, 1, 1}
	//set the sum
	sum := 0
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[i]); j++ {
			//if the room is free, it's haunted
			if matrix[i][j] == 0 {
				//so I set that row to be 0
				haunted[j] = 0
			} else {
				//if the row's not haunted
				if haunted[j] != 0 {
					//add the value to the running sum
					sum += matrix[i][j]
				}
			}
		}
	}
	//then return the sum
	return sum
}

/*
Given an array of strings, return another array containing all of its longest strings.

	Example

	    For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
	    solution(inputArray) = ["aba", "vcd", "aba"]
*/
func allLongestStrings(inputArray []string) []string {
	//step 1: figure out the longest word
	longest := 0
	//also set up the return value
	var arr []string
	//figure out the length of the longest word
	for i := 0; i < len(inputArray); i++ {
		if len(inputArray[i]) > longest {
			longest = len(inputArray[i])
		}
	}
	//then add all values with that length to the return value
	for i := 0; i < len(inputArray); i++ {
		if len(inputArray[i]) == longest {
			arr = append(arr, inputArray[i])
		}
	}
	//and then return the return value
	return arr
}
