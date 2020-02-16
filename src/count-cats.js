module.exports = function countCats(matrix ) {
  //console.log(matrix);
  let count = 0;
  for(let i = 0; i < matrix.length; i++) {
    for(let j of matrix[i]){
        
      if(/^\^\^$/.test(j) == true){
       // console.log(j);
        count++;
      }
    }
  }
  console.log("kkkkkkkkk ----------------" + count);
  return parseInt(count);
  throw 'Not implemented';
  // remove line with error and write your code here
};
