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


module.exports = findKeyByValue;