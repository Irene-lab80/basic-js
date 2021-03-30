const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
      repeatTimes,
      separator,
      addition,
      additionRepeatTimes,
      additionSeparator
  } = options;

  let res = '';

  if (repeatTimes === undefined) repeatTimes = 1;
  if (separator === undefined) separator = '+';
  if (addition === null) addition = 'null';
  if (addition === undefined) addition = '';
  if (additionRepeatTimes === undefined) additionRepeatTimes = 1;
  if (additionSeparator === undefined) additionSeparator = '|';

  for (let i = 0; i < repeatTimes; i++) {
      res += `${str}`;
      for (let j = 0; j < additionRepeatTimes; j++) {
          res += `${ addition}`;
          if (additionRepeatTimes - 1 !== j) {
              res += `${additionSeparator}`;
          }
      }
      if (repeatTimes - 1 !== i) {
          res += `${separator}`;
      }
  }

  return res;
};
  