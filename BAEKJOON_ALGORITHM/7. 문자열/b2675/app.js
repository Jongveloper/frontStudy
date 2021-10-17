const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let count = Number(input[0]);
let answer = '';

for (let i = 1; i <= count; i++) {
  let count = Number(input[i].split(' ')[0]);
  let testCase = input[i].split(' ')[1];
  for (let j = 0; j < testCase.length; j++) {
    for (let k = 0; k < count; k++) {
      answer += testCase[j];
    }
  }
  answer += '\n';
}
console.log(answer);
