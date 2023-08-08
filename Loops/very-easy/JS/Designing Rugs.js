function makeRug(m, n, s="#"){
	var newArr = [];
    var str = s.repeat(n)
    // for(let i=1;i<=n;i++){
    //     str+= s
        
    // }
   for(let j=1;j<=m;j++){
    newArr.push(str)
   }
   return newArr
}

console.log(makeRug(3, 5), [
	"#####", 
	"#####", 
	"#####"
])

console.log(makeRug(3, 5, '$'), [
	"$$$$$", 
	"$$$$$", 
	"$$$$$"
])

console.log(makeRug(2, 2, 'A'), [
	"AA",
	"AA"
])

console.log(makeRug(3, 1, 'b'), [
	"b", 
	"b", 
	"b"
])

console.log(makeRug(2, 1, 'bcb'), [
	"bcb", 
	"bcb"
])