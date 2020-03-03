module.exports = function transform(arr) {
  // throw 'Not implemented';
  // remove line with error and write your code here
  //console.log(arr);
  if (!Array.isArray(arr)) {
    throw Error("arr is not Array");
  }
  if (arr.length === 0) {
    return [];
  }
  for(let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === "--double-next" || i === arr.length - 1) {
      arr.splice(i, 1);
      i--;
    } else {
      arr[i] = arr[i + 1];
      i = -1;
    }
    if (arr[i - 1] === "--double-prev" || i === 0) {
      arr.splice(i, 1);
      i--;
    } else {
      arr[i] = arr[i - 1];
    }
  }

  for(let i = 0; i < arr.length;i++){
    if (arr[i + 1] === "--discard-next" || i === arr.length - 1) {
      arr.splice(i, 1);
      i--;
    } else {
      arr.splice(i, 2);
      i--;
    }
    if (arr[i - 1] === "--discard-prev" || i === 0) {
      arr.splice(i, 1);
      i--;
    } else {
      arr.splice(i - 1, 2);
      i--;
    }
  }
  
  return arr;
};
