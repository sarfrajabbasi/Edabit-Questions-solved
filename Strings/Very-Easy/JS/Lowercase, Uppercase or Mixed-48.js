function getCase(str){
    let a;
    for(let i = 0;i<str.length;i++){
        if(str[i]===/[A-z]/g){
        a =  "mixed"
        }else if(str[i]===/[A-Z]/g){
             a ="upper";
        }else if(str[i] ===/[a-z]/g){
              a= "lower"
        }
    }
    return a
}
console.log(getCase("whisper..."), "lower")
console.log(getCase("SHOUT!"), "upper")
console.log(getCase("Indoor Voice"), "mixed")
console.log(getCase("324324Indoor66453546Voice434"), "mixed")
console.log(getCase("!!!!SHOUT!!!!"), "upper")
console.log(getCase("......313whisper2131232..."), "lower")