function makeCopy(obj) {
	return Object.assign(obj)
}
function makeCopy(obj) {
	return {...obj}
}

const obj = {piano: 100}
const obj2 = {stereo: 200}
const obj3 = {tv: Math.random()}

console.log(makeCopy(obj), obj, "Return a copy of the obj, not the obj itself")
console.log(makeCopy(obj), obj)
console.log(makeCopy(obj2), obj2, "Return a copy of the obj, not the obj itself")
console.log(makeCopy(obj2), obj2)
console.log(makeCopy(obj3), obj3)
console.log(makeCopy(obj3), obj3)