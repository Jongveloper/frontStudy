const num = 121;

const isPalindrome = function (x) {
  if (x.toString().split('').reverse().join('') == x) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(num));
