function afterNMonths(year, months) {
	if(year ==undefined){
        return "year missing"
    }else if(months == undefined){
        return "month missing"
    }else{
        return Math.floor(year + (months/12))
    }
}

console.log(afterNMonths(2020, 24), 2022)
console.log(afterNMonths(1832, 2), 1832)
console.log(afterNMonths(1444, 60), 1449)
console.log(afterNMonths(2020, undefined), "month missing")
console.log(afterNMonths(undefined, 2), "year missing")
console.log(afterNMonths(1444, 65), 1449)
