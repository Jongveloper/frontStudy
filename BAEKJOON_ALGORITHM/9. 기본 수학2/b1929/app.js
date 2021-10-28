const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((item) => +item);
// 시간 초과
// const primeArray = [];

// function primeNumber(n) {
//   if (n < 2) {
//     return;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return;
//     }
//   }
//   primeArray.push(n);
// }

// for (let i = input[0]; i < input[1]; i++) {
//   primeNumber(i);
// }
// console.log(primeArray.join('\n'));

const m = +input[0];
const n = +input[1];
const primeArray = [];
let answer = '';

for (let i = 0; i <= n; i++) {
  primeArray.push(true);
}
primeArray[0] = false;
primeArray[1] = false;

for (let i = 2; i <= n; i++) {
  if (primeArray[i]) {
    for (let j = 2; j <= n / i; j++) {
      primeArray[i * j] = false;
    }
  }
}
for (let i = m; i <= n; i++) {
  if (primeArray[i]) answer += i + '\n';
}
console.log(answer.trim());
