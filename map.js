const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
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



const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];

//inline function that will be take in by our function map as its second argument
const result1 = map(words, word => word[0]);

//pass because they are the same length and the same element
assertArraysEqual(result1, ['g', 'c', 't','m', 't']);

//fail because the array length is not equal
assertArraysEqual(result1, ['g', 'c', 't','m']);

//fail because the position of the elements are not the same
assertArraysEqual(result1, ['g', 't', 'c', 't','m']);