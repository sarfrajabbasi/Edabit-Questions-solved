function concatName(firstName,lastName){
    // let myName = lastName + ", " + firstName;
    // return myName;
    let myName =lastName.concat(", ",firstName);
    return myName;

}

console.log(concatName("John", "Doe"), "Doe, John")
console.log(concatName("First", "Last"), "Last, First")
console.log(concatName("A", "B"), "B, A")

// In case someone is making odd assumptions about comma characters.
console.log(concatName(",", ","), ",, ,")