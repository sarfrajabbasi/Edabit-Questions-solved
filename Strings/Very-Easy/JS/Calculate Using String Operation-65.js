function calculate(num1, num2, op) {
  let  a;
  if(op ==="+"){
    return a = num1  +num2
    
  }else if(op ==="-"){
    return a = num1 - num2
        
}else if(op ==="/"){
    return a = num1 / num2
        
}else if(op ==="*"){
    return a = num1 * num2
        
}else if(op ==="%"){
    return a = num1 % num2
        
}
}
function calculate(num1,num2,op){
    let opertaor = ["+","-","*","/","%"]
    for(let ops in opertaor){
        if(op===opertaor[ops]){
            let a =  num1 + op +num2
            return eval(a)
        }
    }

}
function calculate(num1,num2,op){
   let answer = num1 +op+num2;
   return eval(answer)

}


console.log(calculate(24, 100, "-"), -76);
console.log(calculate(-20, -30, "+"), -50);
console.log(calculate(1500, 5, "/"), 300);
console.log(calculate(38, 3, "*"), 114);
console.log(calculate(49, 5, "%"), 4);
