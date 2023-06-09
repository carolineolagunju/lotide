const assert = require('chai').assert;
const {letterPositions} = require('../index');


describe('#letterPositions', () => {
  const sentence = letterPositions("i am a web developer");

  it("should return [2,5] from sentence['a']", () => {
    assert.deepEqual(sentence['a'], [2,5]);
  });

  it("should return [19] from sentence['r']", () => {
    assert.deepEqual(sentence['r'], [19]);
  });

  it("should return [0] from sentence['i']", () => {
    assert.deepEqual(sentence['i'], [0]);
  });

});