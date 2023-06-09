# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @carolineolagunju/lotide`

**Require it:**

`const _ = require('@carolineolagunju/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: This function returns the first element of an array as it is.


* `tail(arr)`: The function takes away the first element of the array that is passed into it and returns an array of the rest of the elements.


* `middle(arr)`: It returns an array of the middle element of a given array. If the given array length is less than 3, it returns an emprty array [], if the given array length is 6, for example [1,2,3,4,5,6] it returns [3,4], if the given array length is 3, for example [1,2,3] it returns [2].


* `eqArrays(arr1, arr2)`: it takes in 2 arrays as its parameters and returns true if the element type, index and length are equal but returns false if otherwise.


* `assertEqual(actual, expected)`: It takes in two parameters and compare with strict equality. It logs a passed assertion message to the console if both parameters are equal and vice versa.

* `assertArraysEqual(arr1, arr2)`: Takes in 2 arrays as its parameters and compare for equality. If both arrays are equal, it prints passed comparison to the console and vice versa.

* `countOnly(allItems, itemToCount)`: The function takes in an array(allItems) and an object(itemsToCount). The function checks if the element in array(allItems) is present in the object(itemsToCount) as a key and will only count the key if its value is truthy. The counted keys are returned as an object. It will not count a key that is not present in the array even if the key has a truthy value.

* `countLetters(letters)`: The function takes in a string sentence and returns an object containing the counts of how many times a letter appears in the sentence.

* `letterPositions(sentence)`: The function takes in a string sentence as its parameter, returns an object. The letters of the sentence will be the keys of the returned object, the value of the key is an array, the array will house index(position) of each letter in the sentence. If a letter appears more than one time, the index number will be pushed into the array as another element.

* `findKeyByValue(objs, value)`: The function takes in an object and a value, it goes through the object and returns the key that contains the given value. It returns undefined if there is no key containing the given value.

* `eqObjects(object1, objects2)`: It takes in two objects and true if the objects have the same keys and values but returns false if otherwise.