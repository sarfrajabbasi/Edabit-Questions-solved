function filterString(txt) {
  let arr = txt.split("");
  let sChar = "";
  let num = "";
  let upCaseLet = [];
  let loCaseLet = [];
  let specialChar = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "=",
    "-",
    "?",
    "<",
    ">",
    ".",
    ",",
    "'"
  ];
  let numbers = ["1", "2", "3", "3", "4", "5", "6", "7", "8", "9", "0"];

  for (let i = 0; i < arr.length; i++) {
    if (specialChar.includes(arr[i])) {
      sChar += arr[i];
    } else if (numbers.includes(arr[i])) {
      num += arr[i];
    } else if (arr[i].match(/[A-Z]/g)) {
      upCaseLet.push(arr[i]);
    } else if (arr[i].match(/[a-z]/g)) {
      loCaseLet.push(arr[i]);
    }
  }
  return [upCaseLet.length,loCaseLet.length,num.length,sChar.length];
}

console.log(filterString("*$(#Mu12bas43hiR%@*!"), [2, 6, 4, 8]);
console.log(filterString("^^Edabit^^%$#12379"), [1, 5, 5, 7]);
console.log(filterString("123PakisTan#$%"), [2, 6, 3, 3]);
console.log(filterString("**Airforce1**"), [1, 7, 1, 4]);
console.log(filterString("bgA5<1d-tOwUZTS8yQ"), [7, 6, 3, 2]);
console.log(filterString("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"), [9, 9, 6, 9]);
console.log(
  filterString("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),
  [15, 8, 6, 9]
);
console.log(filterString("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10, 7, 3, 6]);
console.log(filterString("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7, 13, 4, 10]);
