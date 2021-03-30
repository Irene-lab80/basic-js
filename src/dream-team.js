const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)){
    let name = [];
    for (let item of members) {
    if (typeof item === "string") {
    const arrItem = item.trim().split('');
    name.push(arrItem[0]);
    }  
  }
  name = name.join('').toUpperCase().split('').sort().join('');
  return name;      
  } else {
    return false;
  } 
};

