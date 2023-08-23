function frontThree(str){
let strFont3;
   if(str !== ''){
    strFont3 = str.slice(0,3);
    return strFont3.repeat(3)
    }else{
        return "''"
    }
}

console.log(frontThree('Python'), 'PytPytPyt', 'Simple string#1')	
console.log(frontThree('Chocolate'), 'ChoChoCho', 'Simple strin#2')	
console.log(frontThree('duh'), 'duhduhduh', '3 characters string')	
console.log(frontThree('Sportsmanship'), 'SpoSpoSpo', 'Generic string')	
console.log(frontThree('ab'), 'ababab', '2 characters string')
console.log(frontThree('a'), 'aaa', '1 characters string')	
console.log(frontThree(''), '', 'Empty string')
