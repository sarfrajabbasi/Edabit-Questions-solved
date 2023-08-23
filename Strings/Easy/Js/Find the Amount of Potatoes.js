// find the amount of potatoes

function potatoes(str){
return str.count("potato")
}

console.log(potatoes("potato"), 1)
console.log(potatoes("potatopotatocherry"),2 )
console.log(potatoes("potatopotatopotatoorange"), 3)
console.log(potatoes("potatopotatobananapotatopotato"), 4)
console.log(potatoes("potatopotatomangopotatopotatopotato"), 5)
console.log(potatoes("potatocucumberpotatopotatopotatopotatopotato"), 6)