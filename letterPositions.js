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


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("😊😊😊 Passed comparison.");
  } else {
    console.log("😡😡😡 Failed comparison.");
  }
};




const letterPositions = sentence => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue;
    }
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
  }
  return results;
};



const sentence = letterPositions("i am a web developer");

//pass
assertArraysEqual(sentence["a"], [2,5]);

//fail because they are not the same data type
assertArraysEqual(sentence["a"], 2,5);

//failed because array is not a string
assertArraysEqual(letterPositions("hello").e, "1");