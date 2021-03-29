const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  if (Array.isArray(arr)) {
    tempArr = arr.map((el) => el);
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] === '--discard-next') {
        if (tempArr[i + 1] !== undefined) {
          if (!controls.includes(tempArr[i + 1])) {
            tempArr.splice(i + 1, 1);
          }
        }
      }
      else if (tempArr[i] === '--discard-prev') {
        if (tempArr[i - 1] !== undefined) {
          if (!controls.includes(tempArr[i - 1])) {
            tempArr.splice(i - 1, 1);
            i++;
          }
        }
      }
      else if (tempArr[i] === '--double-next') {
        if (tempArr[i + 1] !== undefined) {
          if (!controls.includes(tempArr[i + 1])) {
            tempArr.splice(i + 1, 0, tempArr[i + 1]);
            i++;
          }
        }
      }
      else if (tempArr[i] === '--double-prev') {
        if (tempArr[i - 1] !== undefined) {
          if (!controls.includes(tempArr[i - 1])) {
            tempArr.splice(i - 1, 0, tempArr[i - 1]);
            i++;
          }
        }
      }
    }
  }
  else {
    throw new Error();
  }
  for (let i = 0; i < tempArr.length; i++) {
    if (controls.includes(tempArr[i])) {
      tempArr.splice(i, 1);
      i--;
    }
  }
  return tempArr;};
