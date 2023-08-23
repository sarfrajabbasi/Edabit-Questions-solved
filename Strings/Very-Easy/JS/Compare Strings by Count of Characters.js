function comp(str1,str2){
let countChar = str1.length === str2.length;
return countChar;
}
console.log(comp("AB", "CD"), true)
console.log(comp("ABC", "DE"), false)
console.log(comp("hello", "edabit"), false)
console.log(comp("meow", "woof"), true)
console.log(comp("jrnvjrnnt", "cvjknfjvmfvnfjn"), false)
console.log(comp("jkvnjrt", "krnf"), false)
console.log(comp("Facebook", "Snapchat"), true)