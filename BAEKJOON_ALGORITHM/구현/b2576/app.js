const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

let arr = [];
for (let i = 0; i < input.length; i++) {
  if (+input[i] % 2 !== 0) arr.push(+input[i]);
}

if (arr.length === 0) {
  console.log(-1);
} else {
  let sum = arr.reduce((a, b) => a + b);
  let min = Math.min.apply(null, arr);
  let answer = [];
  answer.push(sum, min);
  console.log(answer[0]);
  console.log(answer[1]);
}
