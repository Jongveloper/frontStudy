const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
input = input.toString().split(' ').map(item => +item)
// sort 쓰지 않기
function solution(n, arr) {
  let answer = arr;
  for (let i = 0; i < n; i++) {
    let target = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[target]) target = j;
    }
    [arr[i], arr[target]] = [arr[target], arr[i]];
  }
  return answer;
}

console.log(solution(N, input))