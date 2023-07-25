function circle_or_square(rad, area){

    var circumferenceOfCircle = (2*3.14)*rad
    var periOfSqrt = Math.sqrt(area)*4
    return circumferenceOfCircle >periOfSqrt

}

console.log(circle_or_square(16, 625), true)
console.log(circle_or_square(8, 144), true)
console.log(circle_or_square(15, 400), true)
console.log(circle_or_square(5, 100), false)
console.log(circle_or_square(18, 900), false)
console.log(circle_or_square(1, 4), false)