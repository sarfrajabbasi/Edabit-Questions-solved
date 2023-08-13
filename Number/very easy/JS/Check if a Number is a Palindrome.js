function isPalindrome(n) {
	var palindNum = String(n).split("").reverse().join("");
    return palindNum ==n
}

console.log(isPalindrome(838), true)
console.log(isPalindrome(77), true)
console.log(isPalindrome(95159), true)
console.log(isPalindrome(839), false)
console.log(isPalindrome(4234), false)
console.log(isPalindrome(13), false)