const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
input = +input;
const primeArray = [];
let primeNumber = 2;
// 시간 초과...
// const answer = [];
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
// for (let i = 0; i <= input; i++) {
//   primeNumber(i);
// }
// for (let j = 0; j < primeArray.length; j++) {
//   while (input % primeArray[j] === 0) {
//     answer.push(primeArray[j]);
//     input = input / primeArray[j];
//   }
// }
// if (answer.length === 0) return;
// else console.log(answer.join('\n'));

// 시간 초과
// while (true) {
//   if (input === 1) {
//     break;
//   } else {
//     if (input !== 1) {
//       if (input % primeNumber === 0) {
//         primeArray.push(primeNumber);
//         input = input / primeNumber;
//       } else {
//         primeNumber++;
//       }
//     } else break;
//   }
// }
// if (primeArray.length !== 0) {
//   console.log(primeArray.join('\n'));
// }

while (input !== 1) {
  if (input % primeNumber === 0) {
    console.log(primeNumber);
    input /= primeNumber;
  } else {
    primeNumber++;
  }
}
