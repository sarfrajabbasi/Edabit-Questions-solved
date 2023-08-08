function preventDistractions(str) {
   var arr = str.split(" ");
  for(let i=0;i<arr.length;i++){
    if(arr[i] == "anime" || arr[i] == "meme" || arr[i] == "vines" || arr[i] == "roasts" || arr[i] == "Danny "||  arr[i] == "DeVito"){
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