const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 0; i < input.length; ++i) {
  const tempValue = input[i].split(' ').map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

solution(testCaseArray);

function solution(testCaseArray) {
  let A = testCaseArray[0].A;
  let B = testCaseArray[0].B;
  let idx = 0;
  while (idx < testCaseArray.length - 1) {
    A = testCaseArray[idx].A;
    B = testCaseArray[idx].B;
    console.log(A + B);
    idx++;
  }
}
