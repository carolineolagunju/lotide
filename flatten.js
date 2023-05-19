const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("😊😊😊 Passed comparison.");
  } else {
    console.log("😡😡😡 Failed comparison.");
  }
};




const flatten = function(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        output.push(arr[i][j]);
      }
    } else {
      output.push(arr[i]);
    }
  }
  return output;
};



assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]); // should pass

assertArraysEqual(flatten([1, [2,4], 3]), [1,2,4,3]); //pass

assertArraysEqual(flatten([1, [2,4], 3]), [1,4,4,3]); //fail