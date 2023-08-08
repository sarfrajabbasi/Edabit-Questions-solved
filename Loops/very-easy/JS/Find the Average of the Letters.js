function averageIndex(arr) {
    var sum = 0;
	var letter = {
        "a" :1,"b" :2,"c" :3,"d" :4,"e" :5,"f" :6,"g" :7,"h" :8,"i" :9,"j" :10,"k" :11,"l" :12,"m" :13,"n" :14,"o" :15,"p" :16,"q" :17,"r" :18,"s" :19,"t" :20,"u" :21,"v" :22,"w" :23,"x" :24,"y" :25,"z" :26
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i].length== 1) {
            sum += letter[arr[i]]
        }
       
    }
    sum = sum /arr.length
    return Number(sum.toFixed(2))
}	

console.log(averageIndex(['a','b','c','i']), 3.75)
console.log(averageIndex(['e','d','a','b','i','t']), 6.83)
console.log(averageIndex(['o','m','g']),11.67)
console.log(averageIndex(['o','h','n','o']),13.0)
console.log(averageIndex(['t','w','e','n','t','y','t','w','e','n','t','y']),17.83)
console.log(averageIndex(['y','o','u','a','r','e','t','h','e','b','e','s','t']),12.62)

