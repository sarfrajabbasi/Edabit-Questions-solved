function evenOddString(txt) {
	var evenStr = ""
	var oddStr = ""
    for(let i=0;i<txt.length;i++){
        (i%2==0)?evenStr+=txt[i] :oddStr+=txt[i]
    }
    return `${evenStr} ${oddStr}`
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
