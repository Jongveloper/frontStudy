const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const N = +input.shift();
let sortArr = [];
const lengthArr = input.map((char) => char.length);
const max = Math.max(...lengthArr);
const min = Math.min(...lengthArr);

for (let i = min; i <= max; i++) {
  const arr = [];
  for (let j = 0; j < N; j++) {
    if (input[j].length === i) {
      if (arr.indexOf(input[j]) === -1) arr.push(input[j]);
    }
  }
  if (arr.length > 1) {
    sortArr.push(...arr.sort());
  } else sortArr.push(...arr);
}

console.log(sortArr.join('\n'));
