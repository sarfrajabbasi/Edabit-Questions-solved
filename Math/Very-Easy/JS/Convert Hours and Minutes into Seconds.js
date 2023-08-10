function convert(hours, minutes) {
	var seconds = (hours * 60 * 60) + ( minutes * 60);
    return seconds;
}

console.log(convert(1, 0), 3600)
console.log(convert(1, 3), 3780)
console.log(convert(0, 30), 1800)