const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};



const findKeyByValue = function(bestTVShowsByGenre, word) {
  let result = undefined;
  let arrKeys = Object.keys(bestTVShowsByGenre);
  for (let keys of arrKeys) {
    if (bestTVShowsByGenre[keys] === word) {
      result = keys;
    }
   
  }
  return result;
};


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


