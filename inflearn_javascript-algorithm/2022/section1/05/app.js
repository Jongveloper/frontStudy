const fs = require('fs');
const filePath = './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((item) => +item);

// 내장함수 버전
// function solution(arr) {
//   return Math.min(...arr);
// }

function solution(arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < answer) answer = arr[i];
  }
  return answer;
}

console.log(solution(input));
