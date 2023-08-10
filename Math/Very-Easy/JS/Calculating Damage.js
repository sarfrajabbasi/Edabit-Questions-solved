function damage(damage, speed, time) {
    var amDamage;
	if(
     time == "second" &&
     Math.sign(damage)!=-1 &&
     Math.sign(speed)!=-1
    ){
       amDamage =  damage * speed
    }
    else if(
     time == "minute" && 
     Math.sign(damage)!=-1 &&
     Math.sign(speed)!=-1
     ){
        amDamage = (damage*speed)*60
    }
    else if(
        time == "hour" && 
        Math.sign(damage)!=-1 &&
        Math.sign(speed)!=-1
        ){
        amDamage = (damage*speed)*3600
    }else{
        return "invalid"
    }
    return amDamage
}

console.log(damage(40, 5, "second"), 200)
console.log(damage(100, 1, "minute"), 6000)
console.log(damage(2, 100, "hour"), 720000)
console.log(damage(20, 0.5, "minute"), 600)
console.log(damage(2, 400, "hour"), 2880000)
console.log(damage(-23, 20, "second"), "invalid")
console.log(damage(-23, -5, "second"), "invalid")
console.log(damage(20, -492321, "hour"), "invalid")