function carsNeeded(n) {
   return (n>=5)? Math.ceil(n/5) : (n<=5 && n!=0) ? 1 :0;
}

function carsNeeded(n){
    var cars = 0
    if(n>5 ){
        cars =  Math.ceil(n/5)
    }else if(n<=5 && n!=0){
        cars = 1
    }
    return cars;
}

console.log(carsNeeded(0), 0)
console.log(carsNeeded(1), 1)
console.log(carsNeeded(4), 1)
console.log(carsNeeded(5), 1)
console.log(carsNeeded(6), 2)
console.log(carsNeeded(18), 4)