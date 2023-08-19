function length(str="",cnt) {
    // it store the value
    cnt = cnt || 0;
    // it check th condition if it's zero or not
    if (str.length) {
        console.log(str.length)
       return length(str.substring(1), ++cnt);
    } else {
        return cnt+"";
    }
}

console.log(length('shipment'), 8)
console.log(length('apple'), 5)
console.log(length('make'), 4)
console.log(length('a'), 1)
console.log(length(''), 0)