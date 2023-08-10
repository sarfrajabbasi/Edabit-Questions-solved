function yenToUsd(yen) {
	var JpyToUsd = yen /107.5;
    return +JpyToUsd.toFixed(2)
}

console.log(yenToUsd(1), 0.01)
console.log(yenToUsd(500), 4.65)
console.log(yenToUsd(649), 6.04)
console.log(yenToUsd(1000), 9.3)