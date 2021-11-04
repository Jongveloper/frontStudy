const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input.map((item) => +item);
let testCase = [];

let answer = [];
for (let i = 1; i < input.length; i++) {
  testCase.push(input[i].split(' ').map((item) => +item));
}
for (let i = 0; i < testCase.length; i++) {
  let chart = 0;
  for (let j = 0; j < testCase.length; j++) {
    if (i !== j) {
      if (testCase[i][0] < testCase[j][0] && testCase[i][1] < testCase[j][1]) {
        chart++;
      }
    }
  }
  answer.push(chart + 1);
}
answer = answer.join(' ');
console.log(answer);
