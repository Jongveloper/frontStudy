const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(str) {
  // 반복문
  // let answer = '';
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === 'A') answer += '#';
  //   else answer += str[i];
  // }
  // 정규 표현식
  let answer = str;
  answer = answer.replace(/A/g, '#');
  return answer;
}

console.log(solution(input));
