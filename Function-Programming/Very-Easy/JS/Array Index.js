function arrIndex(arr,idx){ 
let newArr = arr.flat();
let answer =""
for(let i=0;i<idx.length;i++){
  answer +=newArr[idx[i]-1] 
}

return answer

}

results1 = arrIndex([['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']],  [1, 3, 5, 8])
console.log(results1, 'mbsr')
results1 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(results1, 'myexample')
results2 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])
console.log(results2, 'mam')
results3 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8])
console.log(results3, 'mepl')
