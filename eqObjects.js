const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};



const eqObjects = (object1, object2) => {

  let object1Key = Object.keys(object1);

  let object2Key = Object.keys(object2);
  //since keys will be printed as an array, it makes sense to call .length
  if (object1Key.length !== object2Key.length) {
    return false;
  }

  for (const key of object1Key) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const car = {brand: "Ford", model: "Escape", year: 2023, wheel: "All wheel drive"};


const carolineCar = {brand: "Ford", model: "Escape", year: 2023, wheel: "All wheel drive"};

const olagunju = {firstName: "Caroline", lastName: "Olagunju", age: 31, job: "Web developer"};

const caroline = {firstName: "Caroline", lastName: "Olagunju", age: 31, job: "Web developer", school: "LHL"};


assertEqual(eqObjects(car, carolineCar), true);//pass
assertEqual(eqObjects(olagunju, caroline), true);//fail because the length is not equal

