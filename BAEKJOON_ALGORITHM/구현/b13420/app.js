const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = input.shift();

for (let i = 0; i < T; i++) {
  let resultArr = input[i].split(' ').map((item) => item);
  if (resultArr[1] === '*') {
    console.log(
      resultArr[0] * resultArr[2] === +resultArr[resultArr.length - 1]
        ? 'correct'
        : 'wrong answer'
    );
  } else if (resultArr[1] === '+') {
    console.log(
      resultArr[0] + resultArr[2] === +resultArr[resultArr.length - 1]
        ? 'correct'
        : 'wrong answer'
    );
  } else if (resultArr[1] === '-') {
    console.log(
      resultArr[0] - resultArr[2] === +resultArr[resultArr.length - 1]
        ? 'correct'
        : 'wrong answer'
    );
  } else if (resultArr[1] === '/') {
    console.log(
      Math.floor(resultArr[0] / resultArr[2]) ===
        +resultArr[resultArr.length - 1]
        ? 'correct'
        : 'wrong answer'
    );
  }
}
