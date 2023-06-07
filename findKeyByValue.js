const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};



const findKeyByValue = (objs, value) => {
  const findKey = Object.keys(objs);
  let returnedKey = undefined;
  for (const key of findKey) {
    if (objs[key] === value) {
      returnedKey = key;
    }
  }
  return returnedKey;
};


const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


const carol = {
  firstName: "Caroline",
  lastName: "Olagunju",
  age: 31,
  job: "Web Developer"
};


//fail => job !== 31
assertEqual(findKeyByValue(carol, "Web Developer"), 31);

//pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

//pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);