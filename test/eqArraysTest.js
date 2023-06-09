const assert = require('chai').assert;
const {eqArrays} = require('../index');


describe("#eqArrays", () => {
  it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.isFalse(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });

  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it("returns true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.isTrue(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });

});