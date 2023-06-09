const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};



// //Test Data
// //pass
// assertEqual("Lighthouse Labs", "Lighthouse Labs");

// //fail
// assertEqual("Lighthouse Labs", "Bootcamp");

// //pass
// assertEqual(1, 1);

// //fail
// assertEqual(1, 10);

module.exports = assertEqual;