const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};



const countLetters = letters => {
  const result = {};
  for (const letter of letters) {
    if (letter === (" ")) {
      continue;
    }
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};



const letters = countLetters("I am a student of lighthouse labs");

//pass
assertEqual(letters["s"], 3);

//fail
assertEqual(letters["o"], 3);