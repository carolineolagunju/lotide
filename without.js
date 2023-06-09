const assertArraysEqual = require('./assertArraysEqual');


const without = function(arrA, arrB) {
  let diffArr = [];
  for (let i = 0; i < arrA.length; i++) {
    if (arrB.indexOf(arrA[i]) === -1) {
      diffArr.push(arrA[i]);
    }
  }
  return diffArr;
};



//Test Data
const words = ["hello", "world", "lighthouse"];

//["hello", 'world"] should fail
assertArraysEqual(words, ["lighthouse"]);

//pass
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//pass
assertArraysEqual(without([1,2,3], [2,3]), [1]);

module.exports = without;