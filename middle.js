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
    console.log("Passed comparison.");
  } else {
    console.log("Failed comparison.");
  }
};



const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  }

  if (arr.length % 2 === 0) {
    let result = [];
    const num = arr.length / 2;
    result.push(arr[num - 1]);
    result.push(arr[num]);
    return result;
  }

  if (arr.length % 2 !== 0) {
    let result = [];
    const num = arr.length / 2;
    const roundedNum = Math.ceil(num);
    result.push(arr[roundedNum - 1]);
    return result;
  }
};




assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
