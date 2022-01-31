const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }

  return answer;
}

console.log(solution(input));
