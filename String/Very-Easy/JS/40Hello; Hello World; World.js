function helloWorld(num) {
	return (num%3==0 && num%5==0)? "Hello World":(num%5==0)?"World":"Hello"
}
console.log(helloWorld(3), "Hello")
console.log(helloWorld(5), "World")
console.log(helloWorld(15), "Hello World")