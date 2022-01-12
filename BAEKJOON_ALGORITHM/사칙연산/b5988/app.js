const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

for (let i = 0; i < N; i++) {
  if (Number(String(input[i]).slice(-1)) % 2 === 0) {
    console.log('even');
  } else console.log('odd');
}
