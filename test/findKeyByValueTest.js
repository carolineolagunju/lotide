const assert = require('chai').assert;
const {findKeyByValue} = require('../index');


describe('#findKeyByValue', () => {

  const bestTVShowsByGenre = {
    'sci_fi': 'The Expanse',
    comedy: 'Brooklyn Nine-Nine',
    drama:  'The Wire'
  };


  it("should return 'drama' from (bestTVShowsByGenre, 'The Wire')", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });

  it("should return undefined from (bestTVShowsByGenre, 'That '70s Show')", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});