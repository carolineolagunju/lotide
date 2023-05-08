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
/*const assertArraysEqual = function(eqArrays){
  if(eqArrays !== true) {
    return "Failed comparison."
  }
  return "Passed comparison";
}*/

assertArraysEqual([1,2,3], [2,2,4]);
assertArraysEqual([1,2,3], [1,2,3]);