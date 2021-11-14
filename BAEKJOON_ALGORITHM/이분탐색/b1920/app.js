const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, arrN, M, arrM] = input.map((v) => v.split(' '));
const arr = new Set(arrN);
const result = arrM.map((v) => (arr.has(v) ? 1 : 0));
console.log(result.join('\n'));
