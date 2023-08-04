function whoWinsTonight(coins, space, price, size) { 
    var  billS = Math.floor(coins/price);
    var  willC = Math.floor(space/size);
    return billS>willC ? "Bill" : willC>billS ? "Will" :"Tie";
}

console.log(whoWinsTonight(20, 20, 5, 10), 'Bill')
console.log(whoWinsTonight(30, 100, 1, 50), 'Bill')
console.log(whoWinsTonight(90, 10, 2, 5), 'Bill')

console.log(whoWinsTonight(10, 2, 20, 1), 'Will')
console.log(whoWinsTonight(40, 100, 5, 10), 'Will')
console.log(whoWinsTonight(5, 5, 5, 2), 'Will')

console.log(whoWinsTonight(3, 7, 2, 5), 'Tie')
console.log(whoWinsTonight(50, 50, 49, 26), 'Tie')
console.log(whoWinsTonight(100000, 100000, 1, 1), 'Tie')
