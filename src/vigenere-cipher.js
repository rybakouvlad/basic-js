class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(str, key) {

    str = str.toUpperCase().split("");
    key = key.toUpperCase().split("");
    if (this.direct === false) {


      str.reverse();
    }

    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (j === key.length) {
        j = 0;
      }
      if (str[i] === "\u0000") {
        str[i] = "U";
      }
      if (
        str[i].charCodeAt(0) < 65 ||
        str[i].charCodeAt(0) > 90 ||
        str[i] === ""
      ) {
        j--;
        continue;
      }

      let mas = [];
      for (let k = 0, c = str[i].charCodeAt(0); k < 26; k++) {
        if (c === 91) {
          c = 65;
        }
        mas[k] = c;
        c++;
      }

      str[i] = String.fromCharCode(
        mas[key[j].charCodeAt(0) - "A".charCodeAt(0)]
      );
    }

    return str.join("");
  }

  decrypt(str, key) {

    str = str.toUpperCase().split("");
    key = key.toUpperCase().split("");
    if (this.direct === false) {
      str.reverse();
    }

    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (j === key.length) {
        j = 0;
      }
      if (str[i] === "\u0000") {
        str[i] = "U";
      }
      if (
        str[i].charCodeAt(0) < 65 ||
        str[i].charCodeAt(0) > 90 ||
        str[i] === ""
      ) {
        j--;
        continue;
      }

      let mas = [];
      for (let k = 0, c = key[j].charCodeAt(0); k < 26; k++) {
        if (c === 91) {
          c = 65;
        }
        mas[k] = c;
        c++;
      }

      for (let count = 0; count < 26; count++) {
        if (str[i].charCodeAt(0) === mas[count]) {
          str[i] = String.fromCharCode("A".charCodeAt(0) + count);
          break;
        }
      }
    }

    return str.join("");
  }

  checkError(str, key) {
    console.log("Error");

    if (typeof str !== "string" || typeof key !== "string") {
      throw new Error();
    }
  }
}

module.exports = VigenereCipheringMachine;
