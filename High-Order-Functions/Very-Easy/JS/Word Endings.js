function addEnding(arr, ending) {
	let newArr = [];
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i].concat(ending))
    }
    return newArr
}
function addEnding(arr,ending){
   return arr.map((e) => `${e}${ending}`) 
}

console.log(addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly'), ['cleverly', 'meekly', 'hurriedly', 'nicely'])
console.log(addEnding(['new', 'pander', 'scoop'], 'er'), ['newer', 'panderer', 'scooper'])
console.log(addEnding(['bend', 'sharpen', 'mean'], 'ing'), ['bending', 'sharpening', 'meaning'])
console.log(addEnding(['bend', 'tooth', 'mint'], 'y'), ['bendy', 'toothy', 'minty'])
console.log(addEnding(['bend', 'tooth', 'mint'], 'ier'), ['bendier', 'toothier', 'mintier'])