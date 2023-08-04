function gradePercentage(userScore, passScore) {
	let s ;
	userScore = parseInt(userScore.substring(0, userScore.length - 1));
	passScore = parseInt(passScore.substring(0, passScore.length - 1));
	if (userScore <= passScore)
		s =  'FAILED';
	if (userScore >= passScore)
		s =  'PASSED';
	return 'You' + ' ' + s + ' ' + 'the Exam';
}

console.log(gradePercentage("85%", "85%"), "You PASSED the Exam")
console.log(gradePercentage("99%", "85%"), "You PASSED the Exam")
console.log(gradePercentage("65%", "90%"), "You FAILED the Exam")
console.log(gradePercentage("65%", "66%"), "You FAILED the Exam")
console.log(gradePercentage("5%", "8%"), "You FAILED the Exam")
console.log(gradePercentage("8%", "5%"), "You PASSED the Exam")