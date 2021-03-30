const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let depth = 1;
  
      if (Array.isArray(arr)) {
        arr.forEach(elem => {
          if (Array.isArray(elem)) {
            depth = Math.max(this.calculateDepth(elem) + 1, depth);
          }
        });
        return depth;
      } else {
        return 0;
      }
    }
  };