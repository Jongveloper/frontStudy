// 오름차순 
const Array =  [[11, 10, 20], [34, 56, 65, 77], [83, 1, 2, 3, 4, 5], [12, 14, 16, 24, 36, 54]];

function solution(arr) {
  return arr.flat().sort((a,b) => a-b);
}


// 내림차순

function solutionDecending(arr) {
  return arr.flat().sort((a,b) => b-a);
}

console.log(solutionDecending(Array));