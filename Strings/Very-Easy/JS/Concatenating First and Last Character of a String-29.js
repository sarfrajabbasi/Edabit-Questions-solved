// function firstLast(name){
//     let firstChar = name.charAt(0);
//     let lastChar = name.charAt(name.length-1);
//     return firstChar +lastChar

// }
function firstLast(name){
    let firstChar = name.slice(0,1);
    let lastChar = name.slice(name.length-1);
    return firstChar +lastChar

}

console.log(firstLast("ganesh"), "gh")
console.log(firstLast("kali"), "ki")
console.log(firstLast("shiva"), "sa")
console.log(firstLast("vishnu"), "vu")
console.log(firstLast("durga"), "da")
console.log(firstLast("brahma"), "ba")