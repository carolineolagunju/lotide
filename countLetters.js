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

module.exports = countLetters;