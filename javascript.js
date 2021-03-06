
// +1 Array - codewars kata

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// The function in JavaScript:

function upArray(arr){
    if(arr.length === 0){
      return null
    }
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < 0 || typeof(arr[i]) !== "number" || arr[i] > 9){
        return null
      } 
    }
    for(let i = arr.length - 1; i > -1; i--){
      arr[i] = arr[i] + 1
      if(arr[i] > 9){
        arr[i] = 0
      } else{
        i = -1
      }
    }
    if(arr[0] === 0){
      arr.unshift(1)
    }
    return arr
  }

  // Now converted to Python: 

  // def up_array(arr):
    
  // if len(arr) == 0:
  //     return None
  
  // for num in arr:

  //     if num < 0 or type(num) != int or num > 9:
  //         return None
         
  
  // i = len(arr) - 1
  // while i >= 0:
  //     arr[i] = arr[i] + 1
  //     if arr[i] > 9: 
  //         arr[i] = 0
  //         i -= 1
  //     else:
  //         i = -1
          
  // if arr[0] == 0:
  //     arr.insert(0,1)
          
  // return arr


  //////////////
//   Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  newArray = []
  for (i =0; i < a.length; i++) {
      if (!b.includes(a[i])) {
    newArray.push(a[i])
  }
  }
  return newArray
}
// Now in Python! 
def array_diff(a, b):
    newArray = []
    for i in range(len((a))):
        if a[i] not in b:
            newArray.append(a[i])
        
    return newArray



// /////////////////////////////////////////
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


///////////////////

// 7 kyu
// Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (i=0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelsCount ++ 
        }
    }
        
  return vowelsCount;
}

function babySharkLyrics(){
  const char = ['Baby ', 'Mommy ', 'Daddy ', 'Grandma ', 'Grandpa ', 'doo ', ",", '!',"Let's go hunt, ", "go", "shark,", "shark!"]

    for (i = 0; i < 5; i++) {

     
      console.log(char[i], char[10] + " "+ (char[5].repeat(5).repeat(3)) ,char[i] + char[13], char[10] + char[5].repeat(5), char[10] + "!", "Run away,..." )
    }
  
}

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

function firstNonConsecutive (arr) {
  let x = arr

  for(i=0; i<x.length -1; i++) {
    let j = i + 1
     
    if (x[j] !== x[i] +1 ) {
      return x[j]
    }
  }
  return null
}

// If you've completed this kata already and want a bigger challenge, here's the 3D version

// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

const flip=(d, a)=>{
  
  if(d === "R") {
    a.sort(function(a, b){return a-b});
  } else {
     a.sort(function(a, b){return b-a});
  }
  
  return a
}


// 7 kyu
// Small enough? - Beginner

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


function smallEnough(a, limit){
  let b 
  console.log(a, limit)
    for (i=0; i < a.length; i++) {
      if(a[i] > limit) {
      b =  false
        return b
      } else{
      b =  true
        }
    }
  return b
}


// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  let start = []
  let end = []
  let answer = []
  for (i=0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      start.push(arr[i])
    }
    else {
      end.push(arr[i])
          }
  }
  answer = start.concat(end)
  return answer
}

// Fans of The Wire will appreciate this one. For those that haven't seen the show, the Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers: "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."

// Here's a keypad for visualization.

function decode(string) {
  
  let newStr = []
  let answer = ""
 

  for (i=0; i < string.length; i++) {
    
  switch(string[i]) {
   case '1':
    
    newStr.push(9)
    break;
       case '2':
 
      newStr.push(8)
    break;
         case '3':
  
      newStr.push(7)
    break;
         case '4':
    
    newStr.push(6)
    break;
         case '5':
       
    newStr.push(0)
    break;
         case '6':
      
    newStr.push(4)
    break;
         case '7':
 
    newStr.push(3)
    break;
         case '8':

    newStr.push(2)
    break;
               case '9':

    newStr.push(1)
    break;
                case '0':

    newStr.push(5)
    break;

   
}
  }
        return newStr.join("")
}