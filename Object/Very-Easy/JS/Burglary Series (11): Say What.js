function sayWhat(obj) {
	return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`
}
const arr = ["innocent","is"]
const random = Math.ceil(Math.random()*arr.length)
const obj = { 1: "Mommy", 2: "please", 3: "help" }
const obj2 = { 1: arr[random], 2: "innocent", 3: "is" }
console.log(sayWhat(obj), "Mommy please help please")
console.log(sayWhat(obj2), `${obj2[1]} innocent is innocent`);