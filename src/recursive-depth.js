const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
      this.deep = 1;
      this.currentDeep = 1;
  }
  calculateDepth(arr) {
      arr.forEach((el) => {
          if (Array.isArray(el)) {
              this.currentDeep++;
              this.calculateDepth(el);
          }
      });
      if (this.currentDeep > this.deep) {
          this.deep = this.currentDeep;
      }
      this.currentDeep--;
      return this.deep;
  }
};