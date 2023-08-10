function footballPoints(wins, draws, losses) {
	var totalPoints = (wins * 3) + (draws * 1) + (losses * 0);
    return totalPoints;
}

console.log(footballPoints(1, 2, 3), 5)
console.log(footballPoints(5, 5, 5), 20)
console.log(footballPoints(1, 0, 0), 3)
console.log(footballPoints(0, 7, 0), 7)
console.log(footballPoints(0, 0, 15), 0)