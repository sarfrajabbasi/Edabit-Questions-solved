function nothingIsNothing(...arg) {
  var  val = true
//   ek bhi  true hoti h toh fasle and false ha true
    var someM = (x) => !x 

   for(let i=0;i<arg.length;i++){
    if(someM(arg[i])){
          val = false
    }
   }
return val
}

console.log(nothingIsNothing(0, false, [], {}), false)
console.log(nothingIsNothing(33, 'Hello', (true, true, 3)), true)
console.log(nothingIsNothing(true, null), false)
console.log(nothingIsNothing(null, null), false)
console.log(nothingIsNothing(221), true)
console.log(nothingIsNothing(221, 0, 0, 0), false)
console.log(nothingIsNothing([221, 0, 0, 0]), true)