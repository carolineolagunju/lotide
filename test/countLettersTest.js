const assert = require('chai').assert;
const {countLetters} = require('../index');


describe("#countLetters", () => {
  const letters = countLetters("I am a student of lighthouse labs");

  it("returns 3 counts of 's' from variable letter", () => {
    assert.equal(letters['s'], 3);
  });

  it("returns 2 counts of 'o' for from variable letter", () => {
    const letters = countLetters("I am a student of lighthouse labs");
    assert.equal(letters['o'], 2);
  });

});