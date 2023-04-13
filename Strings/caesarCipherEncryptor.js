function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    let alphabetIndex = alphabet.indexOf(string[i]);
    alphabetIndex += key;
    alphabetIndex %= 26;
    newString += alphabet[alphabetIndex];
  }
  return newString;
}
