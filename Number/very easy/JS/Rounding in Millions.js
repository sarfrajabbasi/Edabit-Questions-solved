function millionsRounding(arr) {
	var newArr =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i][1]>500000){
            arr[i][1] =Math.round(arr[i][1]/1000000)*1000000
            newArr.push(arr[i])
        }else if(arr[i][1]<500000){
            arr[i][1] = 0
            newArr.push(arr[i])
        }
    }
    return newArr
}

const cities1 = [
	['Tokyo', 37435191],
	['Delhi', 29399141],
	['Shanghai', 26317104]
	]
	
	const cities2 = [
	['Sao Paulo', 21846507]
	]
	
	const cities3 = [
	['London', 9304016],
	['Naples', 	2186853],
	['Nice', 	942208],
	['Abu Dhabi', 1482816],
	['Riga', 	630692],
	['Vatican City', 572]
	]
	
console.log(millionsRounding(cities1), [
	['Tokyo', 37000000],
	['Delhi', 29000000],
	['Shanghai', 26000000]
	])
	
console.log(millionsRounding(cities2), [
	['Sao Paulo', 22000000]
	])
	
console.log(millionsRounding(cities3), [
	['London', 9000000],
	['Naples', 	2000000],
	['Nice', 	1000000],
	['Abu Dhabi', 1000000],
	['Riga', 	1000000],
	['Vatican City', 0]
	])
	
console.log(millionsRounding([]), [])