const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true
}

const assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2)){
    console.log("Passed comparison.");
  } else {
    console.log("Failed comparison.");
  }
}

/*const assertArraysEqual = function(eqArrays){
  if(eqArrays !== true) {
    return "Failed comparison."
  }
  return "Passed comparison";
}*/

assertArraysEqual([1,2,3], [2,2,4]);
assertArraysEqual([1,2,3], [1,2,3]);

const middle = function(arr) {
  let returnArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.length % 2 === 0) {
      

    }

  }

//check if the length of args is odd

//check if the length of args is between 0 and 2, and return empty array
return returnArr;
}
