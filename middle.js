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




const middle = function(arr) {
  let result = [];
  if (arr.length < 3) {
    return result;
  }

  if (arr.length % 2 === 0) {
    const halfLength = arr.length / 2;
    result.push(arr[halfLength - 1]);
    result.push(arr[halfLength]);
    return result;
  }

  if (arr.length % 2 !== 0) {
    const halfLength = arr.length / 2;
    const roundedLength = Math.floor(halfLength);
    result.push(arr[roundedLength]);
    return result;
  }
};




assertArraysEqual(middle([1,2]), []); //pass
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]); //pass
assertArraysEqual(middle([1,2,3,4,5]), [3,4]); // fail
