function calculator(str){
    let evalute = eval(str);
    return evalute;

}
console.log(calculator("23+4"), 27)
console.log(calculator("45-15"), 30)
console.log(calculator("13+2-5*2"), 5)
console.log(calculator("49/7*2-3"), 11)
console.log(calculator("2+2*2"), 6)
console.log(calculator("5/2"), 2.5)
console.log(calculator("-34/4"), -8.5)
console.log(calculator("0+43-0+56*0"), 43)
console.log(calculator("-14*2-37-0"), -65)
console.log(calculator("0*0"), 0)
console.log(calculator("4+2+3-5*2-8/4-12-0+3-14"), -26)
console.log(calculator("9/2+9/4"), 6.75)
console.log(calculator("56*27*18*12/2*0"), 0)
console.log(calculator("34/4*0*45*7"), 0)