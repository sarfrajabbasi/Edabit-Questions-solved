function length(str,num=0) {
   
   return (str[num] == undefined) ? num : length(str,num+1)
}

console.log(length('shipment'), 8)
console.log(length('apple'), 5)
console.log(length('make'), 4)
console.log(length('a'), 1)
console.log(length(''), 0)