module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {


    //return {turns: Math.pow(2, disksNumber) - 1, seconds: Math.pow(2, disksNumber) /( turnsSpeed / 3600)};
    return {turns: Math.pow(2, disksNumber) - 1, seconds: Math.trunc((Math.pow(2, disksNumber) - 1) * 3600 / turnsSpeed)};
};