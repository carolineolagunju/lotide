const assert = require('chai').assert;
const {head} = require('../index');


describe("#head", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 6 for [6,2,1]", () => {
    assert.strictEqual(head([6,2,1]), 6);
  });

  it("returns caroline for ['caroline', 'olamide']", () => {
    assert.strictEqual(head(['caroline', 'olamide']), 'caroline');
  });
});