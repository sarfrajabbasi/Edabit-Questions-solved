function filterString(txt) {
    var specl =  /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
	var upper =txt.match(/[A-Z]/g).length;
	var lower =txt.match(/[a-z]/g).length;
    var num = txt.match(/[0-9]/g).length;
    var speclChar = txt.match(specl).length

    return [upper,lower,num,speclChar]
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
