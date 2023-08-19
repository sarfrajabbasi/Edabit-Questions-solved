function toScottishScreaming(str) {
	return str.replaceAll(/[aeiou]/g,"e").toUpperCase();
}
console.log(toScottishScreaming("lorem ipsum"),"LEREM EPSEM")
console.log(toScottishScreaming("Leeroy jenkins!"),"LEEREY JENKENS!")
console.log(toScottishScreaming("A, wonderful, day, don't, you, think?"),"E, WENDERFEL, DEY, DEN'T, YEE, THENK?")
console.log(toScottishScreaming("Hello world"),"HELLE WERLD")
console.log(toScottishScreaming("start queueing you oafs"),"STERT QEEEEENG YEE EEFS")
