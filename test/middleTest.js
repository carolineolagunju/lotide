const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


//pass
assertArraysEqual(middle([1,2]), []);

//pass
assertArraysEqual(middle([1,2,3]), [2]);

//pass
assertArraysEqual(middle([1,2,3,4]), [2,3]);

//fail
assertArraysEqual(middle([1,2,3,4,5]), [3,4]);