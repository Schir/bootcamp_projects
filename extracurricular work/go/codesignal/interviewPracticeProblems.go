package codesignal

import (
	"strings"
)

/*
Given an array a that contains only numbers in the range from 1 to a.length,
find the first duplicate number for which the second occurrence has the minimal index.
In other words, if there are more than 1 duplicated numbers,
return the number for which the second occurrence has a smaller index than the second occurrence of the other number does.
If there are no such elements, return -1.
*/
func firstDuplicate(a []int) int {
	//initialize return value
	value := -1
	//make a second array with the range 1 to a.length
	secondArr := make([]int, len(a)+1)
	for i := 0; i < len(a); i++ {
		//since I know that the values are all less than a.length, increment the index at a[i]
		secondArr[a[i]]++
		//if it's more than 2, that's the number we want
		if secondArr[a[i]] == 2 {
			//so set the value to that and get out of this loop
			value = a[i]
			break
		}
	}
	//and return the value at the end
	return value
}

/*
Given a string s consisting of small English letters,
find and return the first instance of a non-repeating character in it. I
f there is no such character, return '_'.
*/
func firstNotRepeatingCharacter(s string) string {
	//basically the same as the above, except I'm just mapping the value out instead
	sArray := strings.Split(s, "")
	mapObject := make(map[string]int)
	for i := 0; i < len(s); i++ {
		mapObject[(sArray[i])]++
	}
	//now that the values have all been mapped to a number, go through the string array
	for i := 0; i < len(sArray); i++ {
		//if the map for that character is 1, return that value
		if mapObject[sArray[i]] == 1 {
			return sArray[i]
		}
	}
	//otherwise return '_'
	return "_"
}

/*	Note: Try to solve this task in-place (with O(1) additional memory),
	since this is what you'll be asked to do during an interview.

	You are given an n x n 2D matrix that represents an image.
	Rotate the image by 90 degrees (clockwise).
*/

func rotateImage(a [][]int) [][]int {
	//make an array to hold the solution
	var arr [][]int
	for i := 0; i < len(a); i++ {
		//make an array for the row
		var arr2 []int
		for j := len(a[i]) - 1; j > -1; j-- {
			//add in the elements at [j][i], where i starts at the first row and j starts at the last column
			arr2 = append(arr2, a[j][i])
		}
		//add the array to the 2d array holding all the rows
		arr = append(arr, arr2)
	}
	//return the rotated image
	return arr
}

//[00, 01, 02]
//[10, 11, 12]
//[20, 21, 22]

//[20,10,00]
//[21,11,01]
//[22,12,02]
