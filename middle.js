const middle = function(arr) {
  const result = [];
  if (arr.length < 3) {
    return result;
  }

  if (arr.length % 2 === 0) {
    const halfLength = arr.length / 2;
    result.push(arr[halfLength - 1]);
    result.push(arr[halfLength]);
    return result;
  }

  if (arr.length % 2 !== 0) {
    const halfLength = arr.length / 2;
    const roundedLength = Math.floor(halfLength);
    result.push(arr[roundedLength]);
    return result;
  }
};


module.exports = middle;