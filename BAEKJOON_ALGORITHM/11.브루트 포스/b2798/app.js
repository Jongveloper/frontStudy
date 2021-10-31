const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input[0] = input[0].split(' ');
let N = +input[0][0];
let M = +input[0][1];
let testCase = input[1].split(' ').map((item) => +item);
let result = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = testCase[i] + testCase[j] + testCase[k];
      let gap = M - sum;
      if (gap >= 0 && result <= sum) {
        result = sum;
      }
    }
  }
}
console.log(result);
