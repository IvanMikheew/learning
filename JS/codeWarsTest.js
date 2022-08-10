function alphabetPosition(text) {
  console.log(text.length);
  text = text.toLowerCase();
  let res = '';
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < text.length; i++) {
    for (let k = 0; k <= alphabet.length; k++) {
      if (i == text.length - 2 && alphabet[k] == text[i]) {
        res += (k + 1);
        break;
      } else if (alphabet[k] == text[i]) {
        res += (k + 1) + " ";
      }
    }
  }
  return text = "\"" + res + "\"";
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
