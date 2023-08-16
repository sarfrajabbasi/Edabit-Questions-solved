function toScottishScreaming(str) {
	return str.replaceAll(/[aiou]/gi,"e").toUpperCase();
}
function toScottishScreaming(str) {
    obj = {
        "a":"e",
        "i":"e",
        "o":"e",
        "u":"e",
    }
	return str.replaceAll(/[aiou]/gi,(m) =>obj[m]).toUpperCase();
}

console.log(toScottishScreaming("lorem ipsum"),"LEREM EPSEM")
console.log(toScottishScreaming("Leeroy jenkins!"),"LEEREY JENKENS!")
console.log(toScottishScreaming("A, wonderful, day, don't, you, think?"),"E, WENDERFEL, DEY, DEN'T, YEE, THENK?")
console.log(toScottishScreaming("Hello world"),"HELLE WERLD")
console.log(toScottishScreaming("start queueing you oafs"),"STERT QEEEEENG YEE EEFS")