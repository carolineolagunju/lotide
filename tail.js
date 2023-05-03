const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};



//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);


const testArr = ["a", "b", "c"];

const tail = function(arr) {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};

console.log(tail([1,2,3,4]));
console.log(tail(testArr))


assertEqual(testArr.length, 3);