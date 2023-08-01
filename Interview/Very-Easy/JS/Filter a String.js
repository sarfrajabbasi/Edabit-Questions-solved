function filterString(txt) {
    let ul = 0;
    let ll =0;
    let num = 0
    let special = 0
    for(let i=0;i<txt.length;i++){
        if((/[0-9]/g).test(txt[i])){
            num++
        }else if((/[A-Z]/g).test(txt[i])){
            ul++
        }else if((/[a-z]/g).test(txt[i])){
            ll++
        }else{
            special++
        }
    }
    return [ul,ll,num,special]
}

console.log(filterString("*$(#Mu12bas43hiR%@*!"), [2,6,4,8])
console.log(filterString("^^Edabit^^%$#12379"), [1,5,5,7])
console.log(filterString("123PakisTan#$%"), [2,6,3,3])
console.log(filterString("**Airforce1**"), [1,7,1,4])
console.log(filterString("bgA5<1d-tOwUZTS8yQ"), [7,6,3,2])
console.log(filterString("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"), [9,9,6,9])
console.log(filterString("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [15,8,6,9])
console.log(filterString("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
console.log(filterString("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10])
