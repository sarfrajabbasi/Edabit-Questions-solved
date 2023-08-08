function filterStateNames(arr, type) {
    var newArr = []
	for(let i =0;i<arr.length;i++){
        if(type == "abb"){
            if(arr[i].length == 2){
                newArr.push(arr[i])
            }   
        }
        if(type == "full"){
            if(arr[i].length >2){
                newArr.push(arr[i]);
         }
        }
        
    }
    return newArr
}

console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'abb'), ['CA', 'NY'])
console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full'), ['Arizona', 'Nevada'])
console.log(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'abb'), ['MT', 'NJ', 'TX', 'ID', 'IL'])
console.log(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'full'), [])
console.log(filterStateNames(['Montana', 'FL'], 'abb'), ['FL'])
console.log(filterStateNames(['Montana', 'FL'], 'full'), ['Montana'])