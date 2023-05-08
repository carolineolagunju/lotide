const eqArrays = function(arr1, arr2) {
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


const eqObjects = function(object1, object2) {
  let result = false;
  let keysArr1 = Object.keys(object1);
  let keysArr2 = Object.keys(object2);
  if (keysArr1.length !== keysArr2.length) {
    return result;
  }

  for (const key of keysArr1) {
    if (object1[key].isArray === object2[key].isArray) {
      result = eqArrays(object1[key], object2[key]);
    }

    else if (object1[key] === object2[key]) {
      result = true;
    } 
  }

  return result;
};



const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false


/*const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), true); // => true*/

