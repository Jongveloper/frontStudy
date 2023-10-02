// var array = [42 ,67, 3, 23, 14];
// var filtered = array.filter(function(entry) {
//   return entry < 30;
// });
// console.log(filtered); // [3, 23, 14]

// const array = [42 ,67, 3, 23, 14];
// const filtered = array.filter(entry => entry < 30);
// console.log(filtered); // [3, 23, 14] 

// const array = [42 ,67, 3, 23, 14];
// array.sort((a,b) => 
//   a % 2 ? b % 2 ? a - b : -1 : b % 2 ? 1 : a - b
// );
// console.log(array); // [ 3, 23, 67, 14, 42 ]

const array = [42 ,67, 3, 23, 14];
array.sort((a,b) => {
  const aIsOdd = a % 2;
  const bIsOdd = b % 2;

  if (aIsOdd) {
    return bIsOdd ? a - b : -1;
  }
  return bIsOdd ? 1 : a - b;
});
console.log(array); // [ 3, 23, 67, 14, 42 ]