const fs = require('fs');
const filePath = './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

function solution(arr) {
  // indexOf;
  // let answer = [];
  // for (let x of arr) {
  //   if (answer.indexOf(x) === -1) answer.push(x);
  // }
  // return answer.join('\n');
  // Set
  // const setArr = new Set(arr);
  // let answer = [...setArr];
  // return answer.join('\n');
  // filter
  let answer;
  answer = arr.filter((v, i) => {
    return arr.indexOf(v) === i;
  });
  return answer.join('\n');
}

console.log(solution(input));
