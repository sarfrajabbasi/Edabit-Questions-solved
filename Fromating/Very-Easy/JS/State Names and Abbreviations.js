function filterStateNames(arr, type) {
	if(type == "abb"){
        return arr.filter(x => x.length<=2)
    }
    return arr.filter(x => x.length >2);
}

console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'abb'), ['CA', 'NY'])
console.log(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full'), ['Arizona', 'Nevada'])
console.log(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'abb'), ['MT', 'NJ', 'TX', 'ID', 'IL'])
console.log(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'full'), [])
console.log(filterStateNames(['Montana', 'FL'], 'abb'), ['FL'])
console.log(filterStateNames(['Montana', 'FL'], 'full'), ['Montana'])