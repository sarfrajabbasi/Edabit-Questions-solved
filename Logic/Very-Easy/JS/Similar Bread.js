function hasSameBread(arr1, arr2) {
    var startArr1 = arr1[0],startArr2 = arr2[0];
    var endArr1 = arr1[arr1.length-1],endArr2 = arr2[arr2.length-1];
	return  startArr1 == startArr2 && endArr1 == endArr2
}
console.log(hasSameBread(
	["white bread", "lettuce", "white bread"],
	["white bread", "tomato", "white bread"]
), true)

console.log(hasSameBread(
	["brown bread", "chicken", "brown bread"],
	["white bread", "chicken", "white bread"]
), false)

console.log(hasSameBread(
	["toast", "cheese", "toast"],
	["brown bread", "cheese", "toast"]
), false)

console.log(hasSameBread(
	["white bread", "lettuce", "toast"],
	["white bread", "tomato", "toast"]
), true)

console.log(hasSameBread(
	["white bread", "lettuce", "toast"],
	["brown bread", "tomato", "toast"]
), false)

console.log(hasSameBread(
	["white bread", "lettuce", "brown bread"],
	["brown bread", "tomato", "white bread"]
), false)

console.log(hasSameBread(
	["white bread", "lettuce", "brown bread"],
	["white bread", "tomato", "white bread"]
), false)