function replaceVowels(str, ch) {
  let s = "";
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".indexOf(str[i]) === -1) {
      s += str[i];
    } else {
      s += ch;
    }
  }
  return s;
}
function replaceVowels(str, ch) {
  let s = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "a":
        s += ch;

        break;
      case "e":
        s += ch;

        break;
      case "i":
        s += ch;

        break;
      case "o":
        s += ch;

        break;
      case "u":
        s += ch;

        break;
     
      default:s +=str[i]
        break;
    }
  }
  return s
}

function replaceVowels(str,ch){
    return str.replace(/[aeiou]/gi,ch)
}
function replaceVowels(str,ch){
    let vowels = ["a","e","i","o","u"]
    let s = str.split("")
    return s.map(char=> vowels.includes(char)? ch :char).join("")
}
console.log(replaceVowels("the aardvark", "#"), "th# ##rdv#rk");
console.log(replaceVowels("minnie mouse", "?"), "m?nn?? m??s?");
console.log(replaceVowels("shakespeare", "*"), "sh*k*sp**r*");
console.log(
  replaceVowels("all is fair in love and war", "<"),
  "<ll <s f<<r <n l<v< <nd w<r"
);
