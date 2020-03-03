

module.exports = class DepthCalculator {

      calculateDepth( arr) {
        let result = 1;
       console.log("kuku:" + arr);
       arr.forEach(el =>  {
        if (Array.isArray(el)) {
        console.log(el); 
        console.log(result + " " + this.calculateDepth(el) + "max" + Math.max(result, this.calculateDepth(el)));
        return result = 1 + this.calculateDepth(el)}
         
    });
    
    
    return result;
      }
};

