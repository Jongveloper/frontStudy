const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const testCaseArray = input[1].split(' ').map((item) => +item);

let cnt = 0;
function primeNumber(n) {
  if (n < 2) {
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
  cnt++;
}

for (let i = 0; i < +input[0]; i++) {
  primeNumber(testCaseArray[i]);
}
console.log(cnt);
