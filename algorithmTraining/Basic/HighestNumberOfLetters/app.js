// 가장 많은 글자 수 반환하기
// 1. 문자열을 키 : 밸류로 만들어주는 함수를 만들자. [o]
// 2. 생성된 오브젝트를 돌며 max 변수보다 크면 max를 밸류 값 answer를 키 값으로 변경하는 함수를 만들자. [o]
const str = 'aaaaanm,nmnmnmnmbbkjnkhaajkjkaaa';


function stringToObject(str){
  const charMap = {};

  for(let char of str) {
    if(charMap[char]){
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
}

function HighestNumberOfLetters(object){
  let max = Number.MIN_SAFE_INTEGER;
  
  let mostLetter = '';

  for(let x in object) {
    if(object[x] > max) {
      max = object[x];
      mostLetter = x;
    }
  }
  return mostLetter;
}

function solution(str) {
  const charMap = stringToObject(str)

  const answer = HighestNumberOfLetters(charMap);

  return answer;
}

console.log(solution(str))