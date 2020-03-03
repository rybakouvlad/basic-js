

module.exports = class DepthCalculator {

      calculateDepth( arr) {
        let mx = 1;
        let result = 1;
       arr.forEach(el =>  {
        if (Array.isArray(el)) {
         result = 1 + this.calculateDepth(el);}
         if(result>mx){
           mx = result;
           
         }
         return mx;
    });
    return mx;
      }    
};

