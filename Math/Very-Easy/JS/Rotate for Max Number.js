function rotateMaxNumber(num) {
  var str = num+"";
  var st = ""
  for (let i = str.length; i >= 0; i--) {
    if(str[i]!= undefined){
        st+=str[i]
    }
  }
  return +st
}

console.log(rotateMaxNumber(123), 321);
console.log(rotateMaxNumber(1546), 6541);
console.log(rotateMaxNumber("001"), 100);
console.log(rotateMaxNumber(999), 999);
console.log(rotateMaxNumber("12345"), 54321);
console.log(rotateMaxNumber("00009"), 90000);
