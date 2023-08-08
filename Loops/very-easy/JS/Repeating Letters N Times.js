function repeat(str, n) {
	var st = "";
    var arr = str.split("");
    for(let i=0;i<arr.length;i++){
      for(let j=1;j<= n;j++)[
        st += arr[i]
      ]
    }
    return st
}

console.log(repeat("mice", 5), "mmmmmiiiiiccccceeeee")
console.log(repeat("hello", 3), "hhheeellllllooo")
console.log(repeat("stop", 1), "stop")
console.log(repeat("tomato", 2), "ttoommaattoo")