function repeat(str, n) {
	var newStr = str.split("");
    var output  = "";
    newStr.forEach(e=>{
        output += e.repeat(n)
    })
    return output
}

console.log(repeat("mice", 5), "mmmmmiiiiiccccceeeee")
console.log(repeat("hello", 3), "hhheeellllllooo")
console.log(repeat("stop", 1), "stop")
console.log(repeat("tomato", 2), "ttoommaattoo")