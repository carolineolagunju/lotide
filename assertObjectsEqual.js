const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Passed test: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Failed test: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



// //Test Data
// const car = {brand: "Ford", model: "Escape", year: 2023, wheel: "All wheel drive"};

// const carolineCar = {brand: "Ford", model: "Escape", year: 2023, wheel: "All wheel drive"};

// const olagunju = {firstName: "Caroline", lastName: "Olagunju", age: 31, job: "Web developer"};

// const caroline = {firstName: "Caroline", lastName: "Olagunju", age: 31, job: "Web developer", school: "LHL"};

// const shirt = {colours: ["white", "green"], size: 2};

// const myShirt = {colours: ["white", "green"], size: 2};


// //pass
// assertObjectsEqual(car, carolineCar);

// //fail because the length is not equal
// assertObjectsEqual(olagunju, caroline);

// //pass
// assertObjectsEqual(shirt, myShirt);

module.exports = assertObjectsEqual;