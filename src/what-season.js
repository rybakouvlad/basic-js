module.exports = function getSeason( date) {
  if(typeof date === "undefined"){
    return "Unable to determine the time of year!";
  }
   if(isNaN(date) === true){
      throw new Error();
   }
  switch (true) {
    case  date.getMonth() === 11 || date.getMonth() === 1 || date.getMonth() === 0 :  return "winter";
    case date.getMonth() > 1 && date.getMonth() < 5 : return "spring";
    case date.getMonth() > 4 && date.getMonth() < 8 : return "summer";
    case date.getMonth() >8 && date.getMonth() < 12: return "autumn";
    default : return "/autumn|fall/";
  }

};
