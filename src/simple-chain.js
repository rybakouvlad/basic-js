const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;

    // remove line with error and write your code here
  },
  addLink(value) {
    this.result.push("( " + value + " )");
    return this;

    //throw 'Not implemented';
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position <= this.result.length &&
      position > 0
    ) {
      this.result.splice(position - 1, 1);
      return this;
    } else {
      this.result = [];
      throw new Error();
    }
    // remove line with error and write your code here
  },
  reverseChain() {
    this.result.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    let a = this.result.join("~~");

    this.result = [];

    return a;
  }
};

module.exports = chainMaker;
