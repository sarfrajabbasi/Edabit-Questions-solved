function checkPalindrome(str) {
	var arr = str.split("").reverse()
    return arr.join("") == str
}

function checkPalindrome(str){
    for(let i=0;i<str.length/2;i++){
        if(str[i] != str[str.length -1-i]){
            return false
        }
    }
    return true;
}
// for of....
function checkPalindrome(str){
    var arr = str.split("")
    for(let i of arr){
        if(i != arr.pop()){
            return false;
        }
    }
    return true;
}

function checkPalindrome(str){
    var revreseArr = str.split("").reverse().join("");
    return revreseArr == str;
}

function checkPalindrome(str){
    var isPlaindrom = true;
    str.split("").forEach(function isPlain(c,i){
        if(c != str[str.length-1-i]){
            isPlaindrom = false
        }
    });
    return isPlaindrom
}
console.log(checkPalindrome('mom'), true)
console.log(checkPalindrome('scary'), false)
console.log(checkPalindrome('reviver'), true)
console.log(checkPalindrome('stressed'), false )
console.log(checkPalindrome('good'), false)
console.log(checkPalindrome('refer'), true)
console.log(checkPalindrome('something'), false)
console.log(checkPalindrome('redder'), true)
console.log(checkPalindrome('civic'), true)