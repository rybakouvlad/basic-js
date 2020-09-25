const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
  let result = [];
  if (!Array.isArray(arr)) {
    throw Error("arr is not Array");
  }
  if (arr.length === 0) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
 
    switch (arr[i]) {
      case "--discard-next":
        if (arr[i + 2] === "--double-prev" ) {
          i++;
          i++;
          break;
        }
        if(arr[i + 2] === "--discard-prev"){
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
        result.push(arr[i + 1]);
        result.push(arr[i + 1]);
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

