function posCom(num) {
	var numSwitches = 2;
    return numSwitches ** num;
}
console.log(posCom(5), 32)
console.log(posCom(4), 16)
console.log(posCom(3), 8)
console.log(posCom(2), 4)
console.log(posCom(1), 2)
console.log(posCom(6), 64)
console.log(posCom(7), 128)
console.log(posCom(8), 256)
console.log(posCom(9), 512)
console.log(posCom(10), 1024)
console.log(posCom(25), 33554432)