const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

function f(n) {
  if (n <= 1) {
    return 1;
  }
  return n * f(n - 1);
}

console.log(f(+input));
