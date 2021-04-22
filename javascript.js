
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
