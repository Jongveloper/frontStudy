const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);
//1. 자연수 m과 n이 주어질 때 m이상 n이하의 자연수 중 소수인 것을 모두 고르는 조건
//-> 소수를 담을 배열을 만들어준다. primeArray
//2. primeArray의 합
//3. primeArray의 최솟 값

const primeArray = [];
let sum = 0;
function primeNumber(n) {
  if (n < 2) {
    return;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
  primeArray.push(n);
  sum += n;
}
for (let i = input[0]; i <= input[1]; i++) {
  primeNumber(i);
}

if (!primeArray.length) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(Math.min.apply(null, primeArray));
}
