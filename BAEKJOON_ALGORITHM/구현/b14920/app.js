const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let cnt = 1;
while (input !== 1) {
  if (input % 2 === 0) input /= 2;
  else input = 3 * input + 1;
  cnt++;
}
console.log(cnt === 0 ? 0 : cnt);
