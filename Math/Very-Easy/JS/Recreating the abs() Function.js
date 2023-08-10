function absolute(n) {
	if(Math.sign(n) == -1){
        return -n
    }
    return n
}

const excludes = f => !RegExp('Math.abs').test(f)
console.log(excludes(absolute), false, "A restricted function is found!")

let [numVector, resVector] = [
	[ -5, -3.14, 250, 0, 6.28, 11037, -12.1320, -1.217197940, 434.6022, -130.406, 26.35,
    -901.732, 868.543, -566.26, 41.05, -889.68, -746.2169, -761.19, 982.503, -733.379,
    -374.406, 601.091, -833.14, -205.7941, -985.92, -432.627, -624.0324, 450.144, 190.319,
    640.22, -468.0362, -7.3915, 554.34, -969.15, -892.875, -163.7127, 626.56, 244.125, -140.56,
    -388.5835, -658.64, -888.92, -689.364, -982.2118, 818.85, 685.15, -104.13, 767.341, -221.47,
    -763.2578, -75.3508, 166.0908, 521.422, -633.0451, -732.862, 372.371, -369.78, -820.2045,
    131.145, 154.64, 782.24, -136.921, -395.722, 229.325, 176.452, 740.12, -432.2624, -661.675,
    156.872, 749.95, -488.386, -659.25, 250.4192, 890.76, 761.384, 806.476, 506.94, 831.81,
    -169.69, -941.307, 821.302, -665.6106, 39.031, 825.04, 275.973, 929.141, -716.83, -428.563,
    132.8035, 381.26, -462.211, -249.6488, 702.74, 758.99, 361.37, -266.31, -239.4475, 705.7603,
    -538.2, -3.37, -589.1788, -797.1114, 748.28, 590.3861, 435.854, -983.71, -224.704, 142.48,
    521.8522, -740.261, 735.7873
	], [
		5.0, 3.14, 250.0, 0.0, 6.28, 11037.0, 12.132, 1.21719794, 434.6022, 130.406, 26.35, 901.732, 868.543,
    566.26, 41.05, 889.68, 746.2169, 761.19, 982.503, 733.379, 374.406, 601.091, 833.14, 205.7941, 985.92,
    432.627, 624.0324, 450.144, 190.319, 640.22, 468.0362, 7.3915, 554.34, 969.15, 892.875, 163.7127, 626.56,
    244.125, 140.56, 388.5835, 658.64, 888.92, 689.364, 982.2118, 818.85, 685.15, 104.13, 767.341, 221.47,
    763.2578, 75.3508, 166.0908, 521.422, 633.0451, 732.862, 372.371, 369.78, 820.2045, 131.145, 154.64,
    782.24, 136.921, 395.722, 229.325, 176.452, 740.12, 432.2624, 661.675, 156.872, 749.95, 488.386, 659.25,
    250.4192, 890.76, 761.384, 806.476, 506.94, 831.81, 169.69, 941.307, 821.302, 665.6106, 39.031, 825.04,
    275.973, 929.141, 716.83, 428.563, 132.8035, 381.26, 462.211, 249.6488, 702.74, 758.99, 361.37, 266.31,
    239.4475, 705.7603, 538.2, 3.37, 589.1788, 797.1114, 748.28, 590.3861, 435.854, 983.71, 224.704, 142.48,
    521.8522, 740.261, 735.7873
	]
]
for (let i in numVector) console.log(absolute(numVector[i]), resVector[i])