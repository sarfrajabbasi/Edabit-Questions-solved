function search(arr, item,pos = 0) {
   if(pos >= arr.length){
    return -1
   }else if(arr[pos]== item){
    return pos
   }
   return search(arr,item,pos+1)
}
function search(arr, item,pos = 0) {
  return (pos == arr.length) ? -1 :(arr[pos] == item)? pos : search(arr,item,pos+1)
}

console.log(search([1, 2, 3, 4], 3), 2)
console.log(search([2, 4, 6, 8, 10], 8), 3)
console.log(search([1, 3, 5, 7, 9], 11), -1)
console.log(search([1, 5, 7, 11, 25, 100, 200, 350], 5), 1)