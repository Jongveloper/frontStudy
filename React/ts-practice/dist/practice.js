"use strict";
var count = 0; // 숫자
count += 1;
// count = '갑자기 분위기 문자열' // 이러면 에러가 난다.
var message = 'hello world';
console.log(message);
var done = true; // 불리언 값
var numbers = [1, 2, 3]; // 숫자 배열
var messages = ['hello', 'world']; // 문자열 배열
// messages.push(1) // 숫자 넣으려고하면 에러난다.
var mightBeUndefined = undefined; // string일 수도 있고 undefined일 수도 있다.
var nullableNumber = null; //number일수도있고 null 일수도있다.
var color = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// color = 'green' //에러 발생
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
function returnNothing() {
    console.log('아무것도 리턴하지 않을 땐 void를 쓰자!');
}
