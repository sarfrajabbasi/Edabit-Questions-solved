function missingAngle(angle1, angle2) {
	var missAngle = 180-(angle1 + angle2)
    if(missAngle < 90){
        return "acute"
    }else if(missAngle == 90){
        return "right"
    }
    return "obtuse"
}
function missingAngle(angle1, angle2) {
	var missAngle = 180-(angle1 + angle2)
    return (missAngle < 90) ? "acute" : (missAngle ==90)? "right":"obtuse"
}
console.log(missingAngle(27, 59), "obtuse")
console.log(missingAngle(135, 11), "acute")
console.log(missingAngle(45, 45), "right")
console.log(missingAngle(45, 15), "obtuse")
console.log(missingAngle(31, 100), "acute")
console.log(missingAngle(35, 55), "right")