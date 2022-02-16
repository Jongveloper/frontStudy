const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
const Num = input[1]
  .toString()
  .split(' ')
  .map((item) => +item);

function isPrime(num) {
  if (num === 2) return true;
  if (num === 1 || num === 0) return false;

  for (let i = 2; i < parseInt(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(n, arr) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let num = Number(arr[i].toString().split('').reverse().join(''));
    if (isPrime(num)) answer.push(num);
  }
  return answer.join(' ');
}

console.log(solution(N, Num));
