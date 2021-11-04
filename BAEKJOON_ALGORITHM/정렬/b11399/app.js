const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input[0];
let people = input[1].split(' ').map((item) => +item);
people.sort((a, b) => a - b);
let time = [];
let prev = 0;
for (let i = 0; i < n; i++) {
  if (i === 0) {
    time.push(people[i]);
    prev += people[i];
  } else {
    time.push(people[i] + prev);
    prev += people[i];
  }
}
console.log(time.reduce((a, b) => a + b));
