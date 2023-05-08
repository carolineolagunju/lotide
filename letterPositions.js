const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Passed comparison.");
  } else {
    console.log("Failed comparison.");
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (const char in sentence) {
    const letter = sentence[char];
    if (letter === " ") {
      continue;
    }
  
    if (!results[letter]) {
      results[letter] = [];
      
    }
    results[letter].push(char);
  }
  return results;

  // logic to update results here
};

assertArraysEqual(letterPositions("hello").e, "1");
//assertArraysEqual(letterPositions("lighthouse in the house").g, "2");
