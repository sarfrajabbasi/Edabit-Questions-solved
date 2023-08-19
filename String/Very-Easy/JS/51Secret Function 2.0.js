function secret(text) {
	var arr = text.split("*");
    var str = `<${arr[0]}></${arr[0]}>`
    return str.repeat(arr[1])
}

console.log(secret("div*2"),`<div></div><div></div>`)
console.log(secret("p*1"),`<p></p>`)
console.log(secret("li*3"),`<li></li><li></li><li></li>`)
console.log(secret("h1*4"),`<h1></h1><h1></h1><h1></h1><h1></h1>`)
console.log(secret("ul*2"),`<ul></ul><ul></ul>`)