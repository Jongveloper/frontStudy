const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = +input;

function solution(n) {
  let zo = [0, 1];
  let fibonacci = (n) => {
    if (zo[n] !== undefined) {
      return zo[n];
    }
    zo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return zo[n];
  };
  return fibonacci(n);
}
console.log(solution(input));
