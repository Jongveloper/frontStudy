const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const day = +input.shift();
const car = input.toString().split(' ');

// function solution(day, cars) {
//   let answer = 0;
//   for (let i = 0; i < cars.length; i++) {
//     if (cars[i][1] == day) answer++;
//   }
//   return answer;
// }

// 다른 풀이
function solution(day, cars) {
  let answer = 0;
  for (let x of cars) {
    if (x % 10 === day) answer++;
  }
  return answer;
}

console.log(solution(day, car));
