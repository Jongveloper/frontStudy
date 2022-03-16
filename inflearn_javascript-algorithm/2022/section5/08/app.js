const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let a = input[0];
let b = input[1];

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

// function solution(a, b) {

//   // let target = b.length;
//   // let sH = new Map();

//   // for (let x of b) {
//   //   if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//   //   else sH.set(x, 1);
//   // }
//   // for (let i = 0; i < a.length; i++) {
//   //   let aTarget = a.substring(i, target);
//   //   for (let x of aTarget) {
//   //     if (!sH.has(x)) answer++;
//   //   }
//   //   target++;
//   // }
//   return answer;
// }

console.log(solution(a, b));
