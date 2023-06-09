const eqArrays = require('./eqArrays');


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


module.exports = eqObjects;