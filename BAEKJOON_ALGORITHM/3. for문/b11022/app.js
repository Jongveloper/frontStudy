const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
  const tempValue = input[i].split(' ').map((item) => +item);
  testCaseArray.push(tempValue);
}

solution(+input[0], testCaseArray);

function solution(T, item) {
  for (let i = 0; i < T; i++) {
    console.log(
      `Case #${i + 1}: ${item[i][0]} + ${item[i][1]} = ${
        item[i][0] + item[i][1]
      }`
    );
  }
}
