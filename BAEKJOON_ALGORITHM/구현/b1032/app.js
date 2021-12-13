const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = +input.shift();
let result = '';

for (let i = 0; i < input[0].length; i++) {
  let alpha = input[0][i];
  let torf = true;
  for (let j = 0; j < N; j++) {
    if (alpha !== input[j][i]) {
      torf = false;
      break;
    }
  }
  if (torf) result += alpha;
  else result += '?';
}

console.log(result);
