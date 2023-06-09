const findKey = (objs, callback) => {
  for (const element in objs) {
    if (callback(objs[element]) === true) {
      return element;
    }
  }
  return undefined;
};

/*
//Test Data
const objs = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result1 = findKey(objs, x => x.stars === 2);
const result2 = findKey(objs, x => x.stars === 5);
const result3 = findKey(objs, x => x.stars === 2);


//pass
assertEqual(result1, "noma");

//pass
assertEqual(result2, undefined);

//failed because Ora is not te first key that is === 2
assertEqual(result3, "Ora");
*/

module.exports = findKey;