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




const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};


const peoples = ["carol", "success", "james", "esther"];
const result1 = takeUntil(peoples, people => people === "esther");

const data1 = [1, 2, 5, 7, 2, -1, 8, 4, 5];
const result2 = takeUntil(data1, data => data > 7);

//pass
assertArraysEqual(result1, ["carol", "success", "james"]);

//fail because the last element in the array is not the same value
assertArraysEqual([1, 2, 5, 7, 2, 0], result2);