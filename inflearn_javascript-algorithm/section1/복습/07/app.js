const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const n = +input[0];
const car = input[1].split(' ').map((item) => +item);

// function solution(n, car) {
//   let answer = 0;
//   for (let i = 0; i < car.length; i++) {
//     if (car[i][1] === n) {
//       answer += 1;
//     }
//   }
//   return answer;
// }

// console.log(solution(n, car));

function solution(n, car) {
  let answer = 0;
  for (let x of car) {
    if (x % 10 === n) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(n, car));
