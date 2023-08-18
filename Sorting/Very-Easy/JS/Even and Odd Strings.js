function evenOddString(txt) {
	var strEven = "";
    var strOdd = "";
    for(let i=0;i<txt.length;i++){
        if(i%2==0){
            strEven += txt[i];
        }else {
            strOdd += txt[i]
        }
    }
    return `${strEven} ${strOdd}`
}
console.log(evenOddString("mubashir"), "mbsi uahr")
console.log(evenOddString("edabit"), "eai dbt")
console.log(evenOddString("airforce"), "aroc ifre")
console.log(evenOddString("Wolfeschlegelsteinhausenbergerdorff"), "Wleclgltihuebredrf ofsheesenasnegrof")
console.log(evenOddString("METHIONYLTHREONYLTHREONYGLUTAMINYLARGINYL"), "MTINLHENLHENGUAIYAGNL EHOYTROYTROYLTMNLRIY")
console.log(evenOddString("PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS"), "PEMNUTAIRSOISLCVLAOOISS NUOOLRMCOCPCIIOOCNCNOI")
console.log(evenOddString("PSEUDOPSEUDOHYPOPARATHYROIDISM"), "PEDPEDHPPRTYODS SUOSUOYOAAHRIIM")
console.log(evenOddString("FLOCCINAUCINIHILIPILIFICATION"), "FOCNUIIIIIIIAIN LCIACNHLPLFCTO")
console.log(evenOddString("SUBDERMATOGLYPHIC"),"SBEMTGYHC UDRAOLPI")
