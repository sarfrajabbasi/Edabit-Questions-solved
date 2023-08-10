function yearsInOneHouse(age, moves) {
	if(moves == 1){
        return Math.round(age/2)
    }else if(moves ==2){
        return Math.round(age/3)
    }else if(moves ==0){
        return age
    }
}

function yearsInOneHouse(age,moves){
    return (moves ==1)? Math.round(age/2) : (moves==2)? Math.round(age/3) : age;
}

console.log(yearsInOneHouse(30, 1), 15)
console.log(yearsInOneHouse(15, 2), 5)
console.log(yearsInOneHouse(80, 0), 80)
console.log(yearsInOneHouse(23, 2), 8)
console.log(yearsInOneHouse(31, 2), 10)
console.log(yearsInOneHouse(1, 0), 1)
