function profitMargin(costPrice, salesPrice) {
	var percentage = ((salesPrice-costPrice)/salesPrice)*100;
    return percentage.toFixed(1) +"%"
}

console.log(profitMargin(10, 15), "33.3%")
console.log(profitMargin(75, 40), "-87.5%")
console.log(profitMargin(55, 55), "0.0%")
console.log(profitMargin(30, 50), "40.0%")
console.log(profitMargin(9999, 10001), "0.0%")
console.log(profitMargin(33, 84), "60.7%")
console.log(profitMargin(28, 39), "28.2%")