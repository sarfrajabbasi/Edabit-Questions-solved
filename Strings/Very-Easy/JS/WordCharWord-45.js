function add(char,str){
    const strReplace = str.replaceAll(" ",char);
    return strReplace
}

console.log(add("#", "hello world"), "hello#world")
console.log(add("R", "javascript is fun"), "javascriptRisRfun")
console.log(add("*", "use .join() for this challenge"), "use*.join()*for*this*challenge")
console.log(add("#", " "), "#")