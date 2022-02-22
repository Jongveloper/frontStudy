const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let ex = input.shift().split(' ');
let std = +ex[0];
let account = +ex[1];
let arr = [];
for (let i = 0; i < std; i++) {
  arr.push(input[i].split(','));
}

for (let i = 0; i < std; i++) {
  arr[i] = arr[i]
    .toString()
    .split(' ')
    .map((item) => +item);
}

function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(solution(account, arr));
