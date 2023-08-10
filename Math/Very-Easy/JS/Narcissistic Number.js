function isNarcissistic(n) {
	var splitStr = "" + n;
  var arr = splitStr.split("")
  var num = 0
  for(let i=0;i<arr.length;i++){
    num += Math.pow(arr[i],arr.length)
  }
   num+=""
  if(num.length <4){
    return true
  }
  return false
}

console.log(isNarcissistic( 1 ), true, "1 is narcissistic")
console.log(isNarcissistic( 5 ), true, "5 is narcissistic")
console.log(isNarcissistic( 7 ), true, "7 is narcissistic")
console.log(isNarcissistic( 153 ), true, "153 is narcissistic")
console.log(isNarcissistic( 370 ), true, "370 is narcissistic")
console.log(isNarcissistic( 371 ), true, "371 is narcissistic")
console.log(isNarcissistic( 2124 ), true, "2124 is narcissistic")
console.log(isNarcissistic( 9004 ), false)
console.log(isNarcissistic( 2546 ), false)
console.log(isNarcissistic( 1634 ), false)
console.log(isNarcissistic( 8345 ), false)