function preventDistractions(str) {
	let words = ["anime","meme","vines","roasts","Danny DeVito"]
    for(let i=0;i<str.length;i++){
        if(str.includes(words[i])){
            return "NO!"
        }

    }
    return "Safe watching!"
    
}
console.log(preventDistractions("vines that butter my eggroll"), "NO!")
console.log(preventDistractions("Hot pictures of Danny DeVito"), "NO!")
console.log(preventDistractions("top 10 insert random yt celebrity roasts"), "NO!")
console.log(preventDistractions("best anime food ever!"), "NO!")
console.log(preventDistractions("How to Be a Productive Member of Society"), "Safe watching!")