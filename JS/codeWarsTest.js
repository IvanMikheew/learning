function alphabetPosition(text) {
  console.log(text.length);
  text = text.toLowerCase();
  let res = '';
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < text.length; i++) {
    for (let k = 0; k <= alphabet.length; k++) {
      if (alphabet[k] == text[i]) {
        res += (k + 1) + " ";
      }
    }
  }
  return res.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
