function mubashirFunction(a, b) {
    var ar,br,val1=0,val2=0;
	if(a<10 && b<10){
        return a*b
    } else{
        ar = (""+a).split("")
        br = (""+b).split("")
        for(let i=0;i<ar.length;i++){
            val1 += +ar[i]
        } 

        for(let i=0;i<br.length;i++){
            val2 += +br[i]
        }
        return val1 *val2
    }

}

//0 * 1 = 0
console.log(mubashirFunction(0,1), 0)

//Obviously, 1 * 2 = 2
console.log(mubashirFunction(1,2), 2)

//That was easy, 5 * 6 = 30
console.log(mubashirFunction(5,6), 30)

//Wait.. What? 10 * 10 = 1 ?
console.log(mubashirFunction(10,10), 1)

//What's happening ? 200 * 200 = 4, 0 was omitted ?
console.log(mubashirFunction(200,200), 4)

//One more...
console.log(mubashirFunction(12,34), 21)

//You can guess from this..
console.log(mubashirFunction(123,45),54)

//Mubashir