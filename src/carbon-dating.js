const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if( typeof sampleActivity !== "string" ) {
    return false;
  }
  sampleActivity = parseFloat(sampleActivity);
  if( sampleActivity < 15 && sampleActivity > 0 ){
    let a = 0.693/HALF_LIFE_PERIOD;
    sampleActivity = parseFloat(sampleActivity);
      return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity )/a);
  }else return false;
   
  
};
