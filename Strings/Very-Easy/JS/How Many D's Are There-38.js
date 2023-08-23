function countDs(sentence){
    let a = 0;
    for(let i=0;i<sentence.length;i++){
        if(sentence[i].includes('d') ||sentence[i].includes('D')){
            a++
        }
    }
    return a;
}

console.log(countDs("My friend Dylan got distracted at school"), 4)
console.log(countDs("Debris was scattered all over the place."), 2)
console.log(countDs("The rodents hibernated in their den."), 3)