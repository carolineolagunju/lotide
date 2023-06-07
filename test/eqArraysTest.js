const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


//pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

//pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

//fail, true !== false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false);

//pass, false === false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);