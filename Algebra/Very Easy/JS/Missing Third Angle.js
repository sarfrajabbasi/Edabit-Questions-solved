function missingAngle(angle1, angle2) {
	var anglesSum =180 - (angle1 + angle2);
    if(anglesSum <90){
        return "acute"
    }else if(anglesSum ==90){
        return "right"
    }else{
        return "obtuse"
    }
}

console.log(missingAngle(27, 59), "obtuse")
console.log(missingAngle(135, 11), "acute")
console.log(missingAngle(45, 45), "right")
console.log(missingAngle(45, 15), "obtuse")
console.log(missingAngle(31, 100), "acute")
console.log(missingAngle(35, 55), "right")