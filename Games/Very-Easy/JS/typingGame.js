function correctStream(user, correct) {
	var newArr = [];
    for(let i=0;i<user.length;i++){
        if(user[i] == correct[i]){
            newArr.push(1)
        }else{
            newArr.push(-1)
        }
    }
    return newArr
}
function correctStream(user, correct) {
	var newArr = [];
    for(let i=0;i<user.length;i++){
       (user[i]==correct[i])? newArr.push(-1) : newArr.push(-1) ;
    }
    return newArr
}
function correctStream(user, correct) {

    return user.map(x => correct.includes(x)? 1 : -1 )
}

console.log(correctStream(["it", "is", "find"], ["it", "is", "fine"]), [1, 1, -1])
console.log(correctStream(["april", "showrs", "bring", "may", "flowers"], ["april", "showers", "bring", "may", "flowers"]), [1, -1, 1, 1, 1])
console.log(correctStream(["weird", "indicr", "moment"], ["weird", "indict", "moment"]), [1, -1, 1])
console.log(correctStream(["starry", "wind", "skies"], ["starry", "wind", "skies"]), [1, 1, 1])