const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const t = +input[0];

for (let i = 1; i <= t; i++) {
  const ACM = input[i].split(' ');
  let h = +ACM[0];
  let n = +ACM[2];
  let room = 1;
  while (n > h) {
    room++;
    n -= h;
  }
  if (room < 10) {
    console.log(`${n}0${room}`);
  } else {
    console.log(`${n}${room}`);
  }
}
