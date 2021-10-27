const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);

for (let t = 0; t < input[0]; t++) {
  const k = input[t * 2 + 1];
  const n = input[t * 2 + 2];
  const apt = Array(k + 1)
    .fill()
    .map((_) => Array(n + 1).fill(0));

  for (let i = 0; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      if (i > 0 && j > 1) break;
      apt[i][j] = j;
    }
  }
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      apt[i][j] = apt[i - 1][j] + apt[i][j - 1];
    }
  }
  console.log(apt[k][n]);
}
