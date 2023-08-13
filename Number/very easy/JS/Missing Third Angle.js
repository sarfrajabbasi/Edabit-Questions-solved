function missingAngle(angle1, angle2) {
    var a3 = 180-(angle1+angle2)
	return (a3<90)? "acute":(a3==90)? "right":"obtuse"
}
console.log(missingAngle(27, 59), "obtuse")
console.log(missingAngle(135, 11), "acute")
console.log(missingAngle(45, 45), "right")
console.log(missingAngle(45, 15), "obtuse")
console.log(missingAngle(31, 100), "acute")
console.log(missingAngle(35, 55), "right") 