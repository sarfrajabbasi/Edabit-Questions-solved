function sayWhat(obj) {
    var  r = Math.round(Math.random()*3 )
	return `${Object.values(obj)} ${obj[r]}`
}

const random = Math.round(Math.random()*3 )
const obj = { 1: "Mommy", 2: "please", 3: "help" }
const obj2 = { 1: random, 2: "innocent", 3: "is" }
console.log(sayWhat(obj), "Mommy please help please")
console.log(sayWhat(obj2), `${obj2[1]} innocent is innocent`)