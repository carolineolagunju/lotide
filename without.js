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



const without = function(arrA, arrB) {
  let diffArr = [];
  for (let i = 0; i < arrA.length; i++) {
    if (arrB.indexOf(arrA[i]) === -1) {
      diffArr.push(arrA[i]);
    }
  }
  return diffArr;
};


const words = ["hello", "world", "lighthouse"];

assertArraysEqual(words, ["lighthouse"]); //["hello", 'world"] should fail

assertArraysEqual(words, ["hello", "world", "lighthouse"]); //pass

assertArraysEqual(without([1,2,3], [2,3]), [1]); // pass



