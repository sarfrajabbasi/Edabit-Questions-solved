function battingAvg(arr) {
	let totalhits = 0;
    let totalAtBats = 0;
    let BA ;
    for(let i=0;i<arr.length;i++){
        totalhits += arr[i][0];
        totalAtBats +=arr[i][1] 
    }
    BA = totalhits/totalAtBats
    return BA.toFixed(3).substring(1);
    
}

console.log(battingAvg([
    [0, 0],
    [1, 3],
    [2, 2],
    [0, 4],
    [1, 5],
  ]), '.286')
console.log(battingAvg([
    [2, 5],
    [2, 3],
    [0, 3],
    [1, 5],
    [2, 4],
  ]), '.350')
console.log(battingAvg([
    [2, 3],
    [1, 5],
    [2, 4],
    [1, 5],
    [0, 5],
  ]), '.273')
console.log(battingAvg([
    [1, 4],
    [0, 5],
    [4, 4],
    [1, 5],
    [0, 5],
  ]), '.261')
console.log(battingAvg([
    [3, 3],
    [0, 5],
    [0, 4],
    [3, 5],
    [1, 5],
  ]), '.318')
console.log(battingAvg([
    [0, 5],
    [1, 2],
    [1, 1],
    [4, 5],
    [1, 6],
    [2, 5],
    [0, 4],
    [3, 3],
    [0, 4],
    [0, 3],
  ]), '.316')
console.log(battingAvg([
    [1, 6],
    [1, 4],
    [0, 4],
    [3, 6],
    [2, 5],
    [1, 4],
    [1, 6],
    [0, 1],
    [2, 5],
    [2, 6],
  ]), '.277')
console.log(battingAvg([
    [2, 4],
    [1, 6],
    [2, 6],
    [1, 4],
    [4, 4],
    [3, 6],
    [2, 5],
    [0, 4],
    [0, 5],
    [0, 5],
  ]), '.306')
console.log(battingAvg([
    [2, 6],
    [0, 3],
    [2, 5],
    [1, 3],
    [4, 6],
    [1, 4],
    [0, 5],
    [0, 5],
    [0, 6],
    [3, 3],
  ]), '.283')
console.log(battingAvg([
    [1, 6],
    [0, 5],
    [0, 6],
    [0, 3],
    [2, 4],
    [3, 3],
    [1, 6],
    [3, 4],
    [0, 5],
    [1, 5],
  ]), '.234')
console.log(battingAvg([
    [1, 1],
    [1, 5],
    [0, 3],
    [1, 3],
    [2, 6],
    [0, 4],
    [0, 5],
    [1, 5],
    [1, 6],
    [2, 2],
  ]), '.225')
console.log(battingAvg([
    [2, 6],
    [0, 5],
    [1, 4],
    [2, 4],
    [4, 5],
    [1, 6],
    [2, 2],
    [0, 4],
    [1, 5],
    [0, 5],
  ]), '.283')
console.log(battingAvg([
    [0, 3],
    [1, 5],
    [3, 4],
    [0, 6],
    [1, 2],
    [3, 4],
    [4, 5],
    [0, 5],
    [0, 5],
    [1, 5],
  ]), '.295')
console.log(battingAvg([
    [3, 3],
    [0, 1],
    [0, 3],
    [3, 5],
    [1, 5],
    [1, 1],
    [2, 6],
    [0, 4],
    [1, 5],
    [2, 6],
  ]), '.333')
console.log(battingAvg([
    [1, 6],
    [1, 5],
    [1, 6],
    [3, 5],
    [3, 5],
    [1, 5],
    [1, 4],
    [2, 6],
    [1, 5],
    [3, 6],
  ]), '.321')