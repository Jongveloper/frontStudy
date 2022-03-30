const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input.shift();
input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(n, arr) {
  let answer = arr;
  for (let i = 0; i < n; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return answer;
}

console.log(solution(n, input));
