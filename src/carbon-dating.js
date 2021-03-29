const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof sampleActivity == 'string') && (parseFloat(sampleActivity) > 0)){
    let k = 0.693 / HALF_LIFE_PERIOD;
    let log1 = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
    var t = Math.ceil(log1 / k);
    return t;
  } else {
    return false;
  }
};
