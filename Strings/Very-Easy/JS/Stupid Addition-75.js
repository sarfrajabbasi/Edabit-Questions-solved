function stupidAddition(a,b){
    if(typeof(a)==="number"&&typeof(b)==="number"){
        return  a+""+b;

    }else if(typeof(a)==="string"&&typeof(b)==="string"){
        return Number(a)+Number(b);
    }else{
        return null
    }

}
console.log(stupidAddition(1, 2), "12", "Both parameters are integers, therefore they should be concatenated")
console.log(stupidAddition("1", "2"), 3, "Both parameters are strings, therefore they should be added")
console.log(stupidAddition(1, "2"), null, "The parameters are different data types, therefore None should be returned")
console.log(stupidAddition("1", 2), null, "The parameters are different data types, therefore None should be returned")
