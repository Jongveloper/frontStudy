const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);

let multi = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
  let cnt = 0;

  for (let j = 0; j < multi.length; j++) {
    if (Number(multi[j]) === i) {
      cnt++;
    }
  }
  console.log(cnt);
}
