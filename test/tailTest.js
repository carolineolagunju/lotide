const assertEqual = require('../assertEqual');
const tail = require('../tail');

const emptyArr = tail([]);
const words = tail(["Lighthouse"]);
const names = tail(["Caroline", "James"]);
const someNumbers = tail(["2", "10", "5"]);
const places = tail(["Canada", "USA", "Mexico", "Nigeria" ]);



assertEqual(emptyArr.length, 0); // should pass because the length of emptyArr is 0
assertEqual(words.length, 1); // fail, length of words is now 0
assertEqual(names.length, 1); // pass, because the length of names is now 1
assertEqual(someNumbers.length, 2);
assertEqual(places.length, "Light"); // should fail because number is !== string