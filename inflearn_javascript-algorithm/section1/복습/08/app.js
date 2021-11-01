const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(s) {
  let answer = s;
  let sum = s.reduce((a, b) => a + b);
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (sum - (s[i] + s[j]) === 100) {
        s.splice(j, 1);
        s.splice(i, 1);
      }
    }
  }
  return answer;
}
console.log(solution(input));
