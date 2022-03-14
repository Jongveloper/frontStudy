const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let t = +input.shift();

function solution(arr) {
  arr = arr.split(' ');
  let first = arr[0];
  let second = arr[1];
  let answer = `${first} & ${second} are anagrams.`;
  let sH = new Map();
  if (first.length !== second.length)
    return `${first} & ${second} are NOT anagrams.`;
  for (let x of first) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of second) {
    if (!sH.has(x) || sH.get(x) === 0)
      return `${first} & ${second} are NOT anagrams.`;
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

for (let i = 0; i < t; i++) {
  console.log(solution(input[i]));
}
