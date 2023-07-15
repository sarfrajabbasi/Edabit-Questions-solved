function hurdleJump(hurdles, jumpHeight) {
	return hurdles.every((x)=> jumpHeight>=x)
}
function hurdleJump(hurdles, jumpHeight) {
    var val =true;
    if(hurdles.length !=0){
        for(let i=0;i<hurdles.length;i++){
            if(jumpHeight<hurdles[i]){
             val = false
            }
         
         }
    }
    return val
}

console.log(hurdleJump([1, 2, 3, 4, 5], 5), true)
console.log(hurdleJump([5, 5, 3, 4, 5], 3), false)
console.log(hurdleJump([5, 4, 5, 6], 10), true)
console.log(hurdleJump([1,2,1], 1), false)
console.log(hurdleJump([3,3,3], 4), true)
console.log(hurdleJump([4,4], 3), false)
console.log(hurdleJump([], 4), true)