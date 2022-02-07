const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let T = +input.shift();
let arr = [];

for (let i = 0; i < T; i++) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  arr.push(
    input[i]
      .toString()
      .split(' ')
      .map((item) => +item)
  );
  for (let j = 0; j < 7; j++) {
    if (arr[i][j] % 2 === 0) {
      sum += arr[i][j];
      if (arr[i][j] < min) min = arr[i][j];
    }
  }
  console.log(sum, min);
}
