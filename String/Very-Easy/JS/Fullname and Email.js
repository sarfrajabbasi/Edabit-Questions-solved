class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
        this.email = `${firstname}.${lastname}@company.com`
        this.fullname = `${firstname} ${lastname}`
	}
}

emp1 = new Employee("John", "Smith")
emp2 = new Employee("Mary",  "Sue")
emp3 = new Employee("Antony", "Walker")
emp4 = new Employee("Joshua", "Senoron")

console.log(emp1.firstname, "John")
console.log(emp1.lastname, "Smith")
console.log(emp1.fullname, "John Smith")
console.log(emp1.email, "john.smith@company.com")
console.log(emp2.firstname, "Mary")
console.log(emp2.lastname, "Sue")
console.log(emp2.fullname, "Mary Sue")
console.log(emp2.email, "mary.sue@company.com")
console.log(emp3.firstname, "Antony")
console.log(emp3.lastname, "Walker")
console.log(emp3.fullname, "Antony Walker")
console.log(emp3.email, "antony.walker@company.com")
console.log(emp4.firstname, "Joshua")
console.log(emp4.lastname, "Senoron")
console.log(emp4.fullname, "Joshua Senoron")
console.log(emp4.email, "joshua.senoron@company.com")
