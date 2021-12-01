const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);

let N = input.shift();
let num1 = 0;
let num0 = 0;
for (let i = 0; i < N; i++) {
  if (input[i] === 1) num1++;
  else num0++;
}
console.log(num0 > num1 ? 'Junhee is not cute!' : 'Junhee is cute!');
