const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(imp, arr) {
  let answer = 'YES';
  let queue = imp.split('');
  // for (let x of arr) {
  //   if (x === queue[0]) queue.shift();
  // }
  // if (queue.length !== 0) answer = 'NO';
  for (let x of arr) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return 'NO';
    }
  }
  if (queue.length > 0) return 'NO';
  return answer;
}

console.log(solution(input[0], input[1]));
