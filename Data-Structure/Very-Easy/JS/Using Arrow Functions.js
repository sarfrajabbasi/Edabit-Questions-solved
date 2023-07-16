var arrowFunc = (val) => val

if(!(String(arrowFunc).includes('=>'))){
	console.log(0,1,"Your code does not use an arrow function")
}


console.log(arrowFunc(3),3)
console.log(arrowFunc("3"),"3")
console.log(arrowFunc(true),true)
console.log(arrowFunc("test"),"test")
