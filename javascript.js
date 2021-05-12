
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