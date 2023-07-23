function reverseCapitalize(str) {
   if(str ==""){
    return ""
   }
   return reverseCapitalize(str.substr(1)) + str.charAt(0).toUpperCase();

}

console.log(reverseCapitalize("edabit"), "TIBADE")
console.log(reverseCapitalize("abc"), "CBA")
console.log(reverseCapitalize("hellothere") ,"EREHTOLLEH")
console.log(reverseCapitalize("input") , "TUPNI")
console.log(reverseCapitalize("indubitably") , "YLBATIBUDNI")