function removeNull(arr) {
	let filter = [];
    for(let i=0;i<arr.length;i++){
        (arr[i] != null)? filter.push() :"No";
    }
    return filter
}

console.log(removeNull(['a', null, 'b', null]), ['a', 'b'])
console.log(removeNull([null, null, null, null, null]), [])
console.log(removeNull([7, 8, null, 9]), [7, 8, 9])
console.log(removeNull([7, null, 8, null, 9]), [7, 8, 9])