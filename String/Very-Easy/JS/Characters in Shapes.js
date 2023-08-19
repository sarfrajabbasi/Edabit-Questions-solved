function countCharacters(arr) {
	return arr.join("").length
}
function countCharacters(arr) {
	var str = "";
    for(let i=0;i<arr.length;i++){
        str+= arr[i]
    }
    return str.length
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