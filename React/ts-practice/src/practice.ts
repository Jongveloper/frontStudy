let count = 0; // 숫자
count += 1;
// count = '갑자기 분위기 문자열' // 이러면 에러가 난다.
const message: string = 'hello world';
console.log(message);

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

// messages.push(1) // 숫자 넣으려고하면 에러난다.

let mightBeUndefined: string | undefined = undefined; // string일 수도 있고 undefined일 수도 있다.
let nullableNumber: number | null = null; //number일수도있고 null 일수도있다.

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// color = 'green' //에러 발생

function sum(x: number, y: number): number {
  return x + y;
}
sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

function returnNothing(): void {
  console.log('아무것도 리턴하지 않을 땐 void를 쓰자!');
}
