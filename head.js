const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  let firstArr = arr[0];
  return firstArr;
};

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([10,6,7]), 5);
