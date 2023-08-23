// function hasSpaces(str){
//     const checkSpace = str.includes(" ")
//     return checkSpace;

// }

// function hasSpaces(str){
//     for(let arr of str){
//         if(arr === " "){
//             return true;
//         }
//     }
//     return false;
// }

function hasSpaces(str){
    for(let i =0;i<str.length;i++){
        if(str[i]===" "){
            return true;

        }
    }
    return false;
}

console.log(hasSpaces("Foo"), false)
console.log(hasSpaces("Foo bar"), true)
console.log(hasSpaces("Foo "), true)
console.log(hasSpaces(" Foo"), true)
console.log(hasSpaces(" "), true)
console.log(hasSpaces(""), false)
console.log(hasSpaces(",./;'[]-="), false)