function countDs(sentence) {
	var arr =  sentence.toLowerCase().split("");
    var count =0
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="d"){
            count++
        }
    }
    return count
}

console.log(countDs("My friend Dylan got distracted at school"), 4)
console.log(countDs("Debris was scattered all over the place."), 2)
console.log(countDs("The rodents hibernated in their den."), 3)