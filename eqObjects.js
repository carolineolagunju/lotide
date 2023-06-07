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




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};




const eqObjects = (object1, object2) => {

  const object1Key = Object.keys(object1);

  const object2Key = Object.keys(object2);

  let returnedValue = false;

  //since keys will be printed as an array, it makes sense to call .length
  if (object1Key.length !== object2Key.length) {
    return false;
  }

  for (const key of object1Key) {
    if (object1[key].isArray === object2[key].isArray) {
      returnedValue = eqArrays(object1[key], object2[key]);
    } else if (object1[key] === object2[key]) {
      returnedValue = true;
    }
  }

  return returnedValue;
};


//Test Data
const car = {brand: "Ford", model: "Escape", year: 2023, wheel: "All wheel drive"};

const carolineCar = {brand: "Ford", model: "Escape", year: 2023, wheel: "All wheel drive"};

const olagunju = {firstName: "Caroline", lastName: "Olagunju", age: 31, job: "Web developer"};

const caroline = {firstName: "Caroline", lastName: "Olagunju", age: 31, job: "Web developer", school: "LHL"};

const shirt = {colours: ["white", "green"], size: 2};

const myShirt = {colours: ["white", "green"], size: 2};



//pass
assertEqual(eqObjects(car, carolineCar), true);

//fail because the length is not equal
assertEqual(eqObjects(olagunju, caroline), true);

//pass
assertEqual(eqObjects(shirt, myShirt), true);