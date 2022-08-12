// 주어진 문자열 많은 순으로 정렬 및 중복 제거
const words = 'abcdefghijklmnopqrstuvwxyzasdfasdfasdfasdfzzziodo';

function solution(string) {
  const answer = [];
  const charMap = new Map();


  for(let str of string) {
    if(charMap.has(str)){
      charMap.set(str, charMap.get(str) + 1)
    } else {
      charMap.set(str, 1);
    }
  }

  const charMapToObject = Object.fromEntries(charMap);

  Object.entries(charMapToObject)
    .sort(([, a], [, b]) => b - a)
    .forEach((obj) => {
      answer.push(obj[0])
    })

  return answer.join('');
}

console.log(solution(words));