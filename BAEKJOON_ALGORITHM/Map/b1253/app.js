const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input.shift();
let arr = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(n, arr) {
  let answer = 0;
  let sH = new Map();
  let sum = [];
  for (let x of arr) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let [key, value] of sH) {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (key === arr[i] + arr[j]) sum.push(key);
      }
    }
  }
  const set = new Set(sum);
  const uniqueArr = [...set];
  answer = uniqueArr.length;
  return answer;
}

console.log(solution(n, arr));
