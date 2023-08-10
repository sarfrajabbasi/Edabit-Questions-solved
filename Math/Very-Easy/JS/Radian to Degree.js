function toDegree(radian) {
	var degree = (radian *180)/Math.PI;
    return Math.round(degree)
}

console.log(toDegree(2 * Math.PI), 360)
console.log(toDegree(Math.PI), 180)
console.log(toDegree(Math.PI / 2), 90)
console.log(toDegree(Math.PI / 4), 45)
console.log(toDegree(Math.PI / 3), 60)