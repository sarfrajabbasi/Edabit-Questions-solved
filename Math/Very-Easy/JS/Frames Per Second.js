function frames(minutes, fps) {
	var inSeconds =  (minutes * fps ) * 60;
    return inSeconds
}

console.log(frames(1, 1), 60)
console.log(frames(10, 1), 600)
console.log(frames(10, 25), 15000)
console.log(frames(500, 60), 1800000)
console.log(frames(0, 60), 0)
console.log(frames(99, 1), 5940)
console.log(frames(419, 70), 1759800)
console.log(frames(52, 33), 102960)