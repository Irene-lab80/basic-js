const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi (diskNumber, turnsSpeed){
  let result = {};
  let turns = 2 ** diskNumber - 1;
  let seconds = turns / turnsSpeed * 3600 ;
  result.turns = turns;
  result.seconds = Math.floor(seconds);
  return result
}