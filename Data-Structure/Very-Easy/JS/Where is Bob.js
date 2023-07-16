function findBob(names) {
	for(let i=0;i<names.length;i++){
        if("Bob" == names[i]){
            return i
        }
    }
    return -1
}

console.log(findBob(["Jimmy", "Layla", "Mandy"]), -1)
console.log(findBob(["Bob", "Nathan", "Hayden"]), 0)
console.log(findBob(["Paul", "Layla", "Bob"]), 2)
console.log(findBob(["Garry", "Maria", "Bethany", "Bob", "Pauline"]), 3)
