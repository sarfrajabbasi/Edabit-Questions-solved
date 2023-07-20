function AlphabetSoup(str) {
	var sArr = str.split("");
    var st = sArr.sort()
    return st.join("");
}
function AlphabetSoup(str){
    var arr = str.split("");
    var tmp;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            // if ASCII code is garter then swap the element
            if(arr[i]>arr[j]){
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr.join("");
}

console.log(AlphabetSoup("hello"), "ehllo");
console.log(AlphabetSoup("edabit"), "abdeit");
console.log(AlphabetSoup("hacker"), "acehkr");
console.log(AlphabetSoup("geek"), "eegk");
console.log(AlphabetSoup("javascript"), "aacijprstv");
console.log(AlphabetSoup("credibility"), "bcdeiiilrty");
console.log(AlphabetSoup("apostrophe"), "aehoopprst");
console.log(AlphabetSoup("determination"), "adeeiimnnortt");
console.log(AlphabetSoup("win"), "inw");
console.log(AlphabetSoup("synthesis"), "ehinsssty");