// 특정 글자 수 세기
const str = 'aaaaanm,nmnmnmnmbbkjnkhaajkjkaaa';

const target = 'a'

//문자열 배열이 있는데, 문자가 나온 수가 높은 순대로 정렬해서 반환
function solution(string, target) {
  const stringToArray = string.split('');

  const answer =  stringToArray.filter((i) => i === target).length


  return answer;
}

console.log(solution(str, target))