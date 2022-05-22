const strArray = ['flower', 'flow', 'flight'];

const longestCommonPrefix = function (strs) {
  let result = '';
  if (strs.length < 1) return result;
  const first = strs[0]; // 첫번째 단어
  for (let i = 0; i < first.length; i++) {
    const char = first[i]; // 첫번째 단어의 한글자 씩
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) return result;
    }
    result += char;
  }
  return result;
};

console.log(longestCommonPrefix(strArray));
