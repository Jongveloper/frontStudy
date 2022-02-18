const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input.shift();
let arr = [];

for (let i = 0; i < N; i++) {
  arr.push(input[i].split(' ').map((item) => +item));
  console.log(solution(arr[i]));
}

function solution(arr) {
  let answer = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    let str = i.toString().split('');
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '0') answer++;
    }
  }
  return answer;
}
