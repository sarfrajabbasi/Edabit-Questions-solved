function determineLever(arr) {
	for(let i=0;i<arr.length;i++){
      if(arr[i]=="f"){
        if(i==1){
            return "first class lever"
        }else if(arr[i] == "f"){
            if(i==2){
                return "second class lever"
            }
        }
      }
    }
    return "third class lever"
}
function determineLever(arr) {
    var val;
	for(let i=0;i<arr.length;i++){
      if(arr[i]=="f"){
        switch (i) {
            case 1:
                val=  "first class lever"
                break;
                
            case 2:
                val =  "second class lever"
                break;
            case 0:
                val =  "third class lever"
                break;
        
            default:"invalid"
                break;
        }
      }
    }
    return val
}

console.log(determineLever(["e", "f", "l"]), "first class lever")
console.log(determineLever(["e", "l", "f"]), "second class lever")
console.log(determineLever(["f", "e", "l"]), "third class lever")
