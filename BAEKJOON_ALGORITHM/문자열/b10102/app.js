const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();
let aCount = 0;
let bCount = 0;

for (let i = 0; i < N; i++) {
  if (input[0][i] === 'A') aCount += 1;
  else bCount += 1;
}

if (aCount < bCount) console.log('B');
else if (bCount < aCount) console.log('A');
else console.log('Tie');
