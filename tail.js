const tail = function(arr) {
  const tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};


console.log(tail([]));
module.exports = tail;