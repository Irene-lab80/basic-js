const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {

      if (message === undefined || key === undefined) throw Error;

      message = message.toUpperCase();
      key = key.toUpperCase();

      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let encryptWord = "";

      for (let i = 0, j = 0; i < message.length; i++) {
          if (alphabet.indexOf(message.charAt(i)) === -1) {
              encryptWord += message.charAt(i);
          } else {
              encryptWord += alphabet.charAt((alphabet.indexOf(message.charAt(i)) + alphabet.indexOf(key.charAt(j % key.length))) % alphabet.length);
              j++;
          }
      }

      return encryptWord;
  }


  decrypt(encryptedMessage, key) {

      if (encryptedMessage === undefined || key === undefined) throw Error;

      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();

      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let decryptWord = "";

      for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
          if (alphabet.indexOf(encryptedMessage.charAt(i)) === -1) {
              decryptWord += encryptedMessage.charAt(i);
          } else {
              decryptWord += alphabet.charAt(((alphabet.indexOf(encryptedMessage.charAt(i)) + alphabet.length) - alphabet.indexOf(key.charAt(j % key.length))) % alphabet.length);
              j++;
          }
      }

      return decryptWord;
  }
}


module.exports = VigenereCipheringMachine;