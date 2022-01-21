const fs = require('fs');
const filePath = './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(arr) {
  let oddArr = [];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArr.push(arr[i]);
    }
  }
  answer.push(oddArr.reduce((a, b) => a + b));
  answer.push(Math.min(...oddArr));
  return answer;
}

console.log(solution(input).join('\n'));
