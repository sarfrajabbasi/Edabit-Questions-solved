function addEnding(arr,ending){
    let ar= []
    for(let i=0;i<arr.length;i++){
        ar.push(arr[i] +ending)
    }
    return ar
}
function addEnding(arr,ending){
    return arr.map(el => el+ending)
}
console.log(addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly'), ['cleverly', 'meekly', 'hurriedly', 'nicely'])
console.log(addEnding(['new', 'pander', 'scoop'], 'er'), ['newer', 'panderer', 'scooper'])
console.log(addEnding(['bend', 'sharpen', 'mean'], 'ing'), ['bending', 'sharpening', 'meaning'])
console.log(addEnding(['bend', 'tooth', 'mint'], 'y'), ['bendy', 'toothy', 'minty'])
console.log(addEnding(['bend', 'tooth', 'mint'], 'ier'), ['bendier', 'toothier', 'mintier'])