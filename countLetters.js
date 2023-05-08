const assertEqual = function(actual, expected) {
  if (!actual === expected) {
    console.log(`🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

  console.log(`✅✅ Assertion passed: ${actual} === ${expected}`);
};



const countLetters = function(string) {
  const result = {};

  for (const letter of string) {
    if (letter === " ") {
      continue;
    }

    if (!result[letter]) {
      result[letter] = 0;
    }

    result[letter]++;

  }

  return result;
};

assertEqual(countLetters('lighthouse'));