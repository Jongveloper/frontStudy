// 가장 많은 글자 수 반환하기
// 1. 문자열을 키 : 밸류로 만들어주는 함수를 만들자. [o]
// 2. 생성된 오브젝트를 돌며 max 변수보다 크면 max를 밸류 값 answer를 키 값으로 변경하는 함수를 만들자. [o]
const str = 'aaaaanm,nmnmnmnmbbkjnkhaajkjkaaa';

// 리듀스로 바꾸기
// Map으로 변경
function stringToObject(str){
  // const charMap = {};

  // for(let char of str) {
  //   if(charMap[char]){
  //     charMap[char]++;
  //   } else {
  //     charMap[char] = 1;
  //   }
  // }

  // return charMap;

  // const charMap = new Map();
  
  // for(let char of str){
  //   const counting = charMap.get(char);
  //   charMap.set(char, (counting || 0) + 1)
  // }
  // return charMap;

  const stringToArray = str.split('');

  return stringToArray.reduce((charMap, result) => {
    charMap[result] = (charMap[result] || 0) + 1;
    return charMap
  }, {})
}

function highestNumberOfLetters(wordCounts){
  let max = Number.MIN_SAFE_INTEGER;

  // let entries = wordCounts.entries();
  
  let mostLetter = '';

  // for(let [letter, count] of entries){
  //   if(count > max){
  //     max = count;
  //     mostLetter = letter;
  //   }
  // }

  for(let wordInfo in wordCounts){
    if(wordCounts[wordInfo] > max) {
      max = wordCounts[wordInfo];
      mostLetter = wordInfo
    }
  }


  // for(let x in wordCounts) {
  //   if(wordCounts[x] > max) {
  //     max = wordCounts[x];
  //     mostLetter = x;
  //   }
  // }
  return mostLetter;
}

function solution(str) {
  const charMap = stringToObject(str)

  const answer = highestNumberOfLetters(charMap);

  return answer;
}

console.log(solution(str))