module.exports = function repeater(str, options) {
  let result = "";
  if (typeof options.repeatTimes === "number") {
    for (let i = 0; i < options.repeatTimes; i++) {
      result += str;
      if (typeof options.additionRepeatTimes === "number" && typeof  options.additionSeparator === "string") {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            result += options.addition;
          if(j < options.additionRepeatTimes - 1){
            
            result += options.additionSeparator;
          }
         
        }
        if (i < options.repeatTimes - 1) {
            if(typeof options.separator === "string" ){
                result += options.separator;
            }else result += "+";  
          } 
      } else {
        if (typeof options.addition === "string") {
          result += options.addition;
        }
        if (i < options.repeatTimes - 1) {
            if(typeof options.separator === "string" ){
                result += options.separator;
            }else result += "+";  
          } 
      }
    }
  }else result = str + options.addition;

  return result;
};
