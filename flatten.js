const flatten = function(arr) {
  const output = [];
  for (const item of arr) {
    
    if (Array.isArray(item)) {
      for (const element of item) {
        output.push(element);
      }
    } else {
      output.push(item);
    }
  }
  return output;
};


// //Test Data
// //should pass
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);

// //pass
// assertArraysEqual(flatten([1, [2,4], 3]), [1,2,4,3]);

// //fail
// assertArraysEqual(flatten([1, [2,4], 3]), [1,4,4,3]);

module.exports = flatten;