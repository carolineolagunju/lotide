const assert = require("chai").assert
const tail = require('../tail');


describe("#tail", () => {
  it("returns ['2','3'] for ['1','2','3']", () => {
    assert.deepEqual(tail(['1','2','3']), ['2','3'])
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), [])
  });

  it("returns [] for ['Lighthouse']", () => {
    assert.deepEqual(tail(['Lighthouse']), [])
  });

  it("returns ['USA', 'Mexico', 'Nigeria'] for ['Canada', 'USA', 'Mexico', 'Nigeria']", () => {
    assert.deepEqual(tail(['Canada', 'USA', 'Mexico', 'Nigeria']), ['USA', 'Mexico', 'Nigeria'])
  });
  
});