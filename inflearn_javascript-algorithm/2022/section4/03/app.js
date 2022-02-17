const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let test = input
  .shift()
  .split(' ')
  .map((item) => +item);

let N = test[0];
let std = test[1];

let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i].split(' ').map((item) => +item));
}

function solution(arr) {
  let answer = 0;
  let m = arr.length;
  let student = arr[0].length;
  for (let i = 1; i <= student; i++) {
    for (let j = 1; j <= student; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < student; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

console.log(solution(arr));
