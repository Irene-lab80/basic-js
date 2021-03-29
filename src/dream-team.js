const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
    let name = [];
    for (let item of members) {
    if (typeof item === "string") {
      const arrItem = item.trim().split('');
      name.push(arrItem[0])
    }
  }
  return name.sort().join('').toUpperCase();
  } else {
    return false;
  }
  
};

