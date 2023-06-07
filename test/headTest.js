const assertEqual = require('../assertEqual')
const head = require('../head');

//pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//pass
assertEqual(head([5,6,7]), 5);

//fail
assertEqual(head([10]), 5);

//fail
assertEqual(head([]), 0);