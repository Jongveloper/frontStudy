const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let cnt = 0;
for (let x of input) {
  switch (x) {
    case 'a':
      cnt++;
      break;
    case 'e':
      cnt++;
      break;
    case 'i':
      cnt++;
      break;
    case 'o':
      cnt++;
      break;
    case 'u':
      cnt++;
      break;
  }
}
console.log(cnt);
