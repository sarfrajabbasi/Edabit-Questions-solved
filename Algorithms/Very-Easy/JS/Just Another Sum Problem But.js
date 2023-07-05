function justAnotherSumProblem(a, b) {
    var sum = 0
    if(a>b){
        for(let i=b;i<=a;i++){
            sum  +=i
        }
    }else{
        for(let i=a;i<=b;i++){
            sum  +=i
        }
    }

    return sum
}
// Negative
console.log(justAnotherSumProblem(1,-10), -54)
console.log(justAnotherSumProblem(-20,5), -195)
console.log(justAnotherSumProblem(-40,20), -610)
console.log(justAnotherSumProblem(20,-100), -4840)
console.log(justAnotherSumProblem(-15,3), -114)
console.log(justAnotherSumProblem(-8,4), -26)

// Positive
console.log(justAnotherSumProblem(90,45), 3105)
console.log(justAnotherSumProblem(100,58), 3397)
console.log(justAnotherSumProblem(65,48), 1017)
console.log(justAnotherSumProblem(2,3), 5)
console.log(justAnotherSumProblem(89,256), 28980)
console.log(justAnotherSumProblem(302,56), 44213)

// Author: Juan esteban