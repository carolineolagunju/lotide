const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("😊😊😊 Passed comparison.");
  } else {
    console.log("😡😡😡 Failed comparison.");
  }
};


// //Test Data

// //fail
// assertArraysEqual([1,2,3], [2,2,4]);


// assertArraysEqual([1,2,3], [1,2,3]);


module.exports = assertArraysEqual;