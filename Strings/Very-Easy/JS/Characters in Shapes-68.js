function countCharacters(arr){
    let newStr = arr.join("");
    return newStr.length
}

function countCharacters(arr){
    let a= ""
    for(let i=0;i<arr.length;i++){
         (arr[i]!==0)? a += arr[i] : 0
    }
    return a.length
}

console.log(countCharacters([
    '###',
    '###',
    '###'
    ]), 9)
    
    console.log(countCharacters([
    '22222222',
    '22222222',
    ]), 16)
    
    console.log(countCharacters([
    '------------------'
    ]), 18)
    
    console.log(countCharacters([]), 0)
    console.log(countCharacters([
    '',
    '']), 0)