const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let n = input.shift();

input.sort((a, b) => parseFloat(a) - parseFloat(b));

//parseFloat 함수는 문자를 분석하여 정수를 반환하는 기능을 가짐
// 이름을 제외한 나이만 가져와서 비교가능
