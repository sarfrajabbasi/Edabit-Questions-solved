function rogerShots(arr) {
	var newArr = arr.filter(e=> (e=="Bang!" || e=="BangBang!" || e =='BangBangBang!' ))
    return newArr.length*0.5
}
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]), 3)
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]), 2.5)
console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]), 2)
console.log(rogerShots(["BangBang!", "BangBang!", "BangBang!"]), 1.5)
console.log(rogerShots(["Bang!", "BadaBing!", "Badaboom!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]), 3)
console.log(rogerShots(["BangBang!", "BangBang!", "Bag!", "Ban!", "Tang!", "Bang!", "Bang!"]), 2)
