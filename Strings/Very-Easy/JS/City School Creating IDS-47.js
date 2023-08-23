function createID(firstname,lastname){
    let first =  firstname.charAt(0);
    let addItCapital = lastname.charAt(0).toUpperCase(); 
    let second =  lastname.slice(1,3);
    
    return first + addItCapital +second.toLowerCase() ;
}
console.log(createID("mary","smith"), "mSmi", "all lower case")
console.log(createID("S","WORKING"), "sWor", "all upper case")
console.log(createID("joHN","wAShington"), "jWas", "mixed case")