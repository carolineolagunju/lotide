const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};



// //Test Data
// const words = ["ground", "control", "to", "major", "tom"];

// //inline function that will be take in by our function map as its second argument
// const result1 = map(words, word => word[0]);

// //pass because they are the same length and the same element
// assertArraysEqual(result1, ['g', 'c', 't','m', 't']);

// //fail because the array length is not equal
// assertArraysEqual(result1, ['g', 'c', 't','m']);

// //fail because the position of the elements are not the same
// assertArraysEqual(result1, ['g', 't', 'c', 't','m']);

module.exports = map;