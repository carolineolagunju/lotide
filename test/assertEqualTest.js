const assertEqual = require('../assertEqual');
assertEqual("Lighthouse Labs", "Lighthouse Labs");//pass
assertEqual("Lighthouse Labs", "Bootcamp");//fail
assertEqual(1, 1);//pass
assertEqual(1, 10);//fail