function moodToday(mood='neutral') {
	return `Today, I am feeling ${mood}`
}

console.log(moodToday("happy"), "Today, I am feeling happy")
console.log(moodToday("sad"), "Today, I am feeling sad")
console.log(moodToday("very happy"), "Today, I am feeling very happy")
console.log(moodToday("rather empty inside"), "Today, I am feeling rather empty inside")
console.log(moodToday("confused"), "Today, I am feeling confused")
console.log(moodToday(), "Today, I am feeling neutral")