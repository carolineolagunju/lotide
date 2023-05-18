const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};



const tail = function(arr) {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};


const emptyArr = tail([]);
const words = tail(["Lighthouse"]);
const names = tail(["Caroline", "James"]);
const someNumbers = tail(["2", "10", "5"]);
const places = tail(["Canada", "USA", "Mexico", "Nigeria" ]);



assertEqual(emptyArr.length, 0); // should pass because the length of emptyArr is 0
assertEqual(words.length, 1); // fail, length of words is now 0
assertEqual(names.length, 1); // pass, because the length of names is now 1
assertEqual(someNumbers.length, 2);
assertEqual(places.length, "Light"); // should fail because number is !== string