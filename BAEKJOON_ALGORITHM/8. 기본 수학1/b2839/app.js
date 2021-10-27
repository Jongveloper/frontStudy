const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let sugar = fs.readFileSync(filePath).toString();

let cnt = 0;

while (sugar >= 0) {
  if (sugar % 5 === 0) {
    cnt += sugar / 5;
    console.log(cnt);
    break;
  }
  sugar -= 3;
  cnt++;
  if (sugar < 0) console.log(-1);
}
