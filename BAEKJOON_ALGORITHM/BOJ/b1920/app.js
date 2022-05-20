const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const A = input[1].split(' ').map((item) => +item);
const M = input[3].split(' ').map((item) => +item);
const answer = [];

A.sort((a, b) => a - b); // 이분탐색을 위한 정렬
M.forEach((v) => {
  let start = 0; // 탐색 대상의 처음
  let end = A.length - 1; // 탐색 대상의 끝
  let res = false;
  while (start <= end) {
    let mid = parseInt((start + end) / 2); // 탐색 대상의 시작과 끝의 중간값
    if (v < A[mid]) {
      end = mid - 1;
    } else if (v > A[mid]) {
      start = mid + 1;
    } else {
      res = true;
      break;
    }
  }
  if (res === true) {
    answer.push(1);
  } else {
    answer.push(0);
  }
});

console.log(answer.join('\n'));
