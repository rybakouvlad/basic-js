module.exports = function transform(arr) {
  // throw 'Not implemented';
  // remove line with error and write your code here
  //console.log(arr);
  let result = [];
  if (!Array.isArray(arr)) {
    throw Error("arr is not Array");
  }
  if (arr.length === 0) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    //console.log(result);
    switch (arr[i]) {
      case "--discard-next":
        if (arr[i + 2] === "--double-prev" || arr[i + 2] === "--double-prev") {
          result.push(arr[i + 1]);
          i++;
          i++;
          break;
        }
        i++;
        break;
      case "--discard-prev":
        result.splice(result.length - 1, 1);
        break;
      case "--double-next":
        if (i >= arr.length - 1) {
          break;
        }
        result.push(arr[i + 1], arr[i + 1]);
        i++;
        break;
      case "--double-prev":
        if (result.length < 1) break;

        result.push(result[result.length - 1]);
        if (arr[i - 2] === "--discard-next") {
        }
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }
  return result;
};
