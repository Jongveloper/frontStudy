/**
 * 비동기는 동기가 아니다.(동시의 개념으로 생각하면 헷갈린다. 동시라기보단 순서다.)
 * 비동기는 동시의 문제가 아니라 순서의 문제이다.
 * 한번 비동기는 영원한 비동기이다.
 * promise, process.nextTick -> micro, 나머지는 매크로
 * micro가 매크로보다 우선순위가 높다.
 * Promise란, 실행은 바로 하되, 결괏값을 나중에 원할 때 쓸 수 있는 것
 * promise는 new Promise할 때 호출된다.
 * promise의 catch는 then catch앞에있는 then의 전체의 catch이다.
 * promise 
 * 실행은 바로 ---> 결괏값이 나올 때는 나중 ----> 결괏값을 사용할 때는 더 나중
 * 실행은 바로 ---> 결괏값도 거의 바로 쓰고 싶은데 ---> 그 다음에 결괏값이 나오면 ---> then, await, Promise.all 이런게 결과값을 기다린 후에 실행된다.
 */

// setTimeout(() => {
//   console.log('a')
// }, 0)
// setTimeout(() => {
//   console.log('b')
// }, 1000)
// setTimeout(() => {
//   console.log('c')
// }, 2000)
// Promise.resolve().then(() => {
//   console.log('p')
// }) // p가 가장빨리 찍힘 (promise가 우선순위가 더 높기 때문에(마이크로))


// 한 번 비동기는 영원한 비동기
// let a = 2;
// setTimeout(() => {
//   a = 5;
//   console.log('time' + a); // time5
//   // a를 5로 만들고싶다면 여기에서만!
// }, 0)
// console.log(a); // 2
// let a = 2;

// const p = new Promise((resolve, reject) => {
//   console.log('여기는 동기!!');
//   setTimeout(() => {
//     a = 5;
//     console.log(a);
//     resolve(a)
//   }, 0)
// })

// p.then((result) => {
//   console.log('result', result);
// })

// async function a() {
//   const a = await 1;
//   console.log('a', a);
//   console.log('hmm');
//   await null;
//   const b = await Promise.resolve(1);
//   console.log('b', b);
//   return b;
// }

// Promise.resolve(1)
//   .then((a) => {
//     console.log('a', a);
//     console.log('hmm');
//     return null;
//   })
//   .then(() => {
//     return Promise.resolve(1);
//   })
//   .then((b) => {
//     console.log('b', b);
//     return b
//   })

function delayP(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

async function a() {
  await delayP(3000); // 3초
  await delayP(6000); // 6초
  await delayP(9000); // 9초
} // total : 18초

async function b() {
  const p1 = delayP(3000);// 3초
  const p2 = delayP(6000); // 6초
  await Promise.all([p1, p2]); // 6초
  await delayP(9000); // 9초
} // total : 15초

// example
// async function createPost() {
//   const post = await db.getPost(); // 게시물 조회
//   if (post) {
//     resizeBy.status(403).send('이미 게시글이 존재합니다.');
//   } else {
//     await db.createPost(); // 게시글 작성

//     const postCount = db.userIncrementPostCount(); // 사용자에 작성글 카운트 1 올림
//     const Noti = db.createNoti(); // 새로운 게시글 알림 등록
//     await Promise.allSettled([postCount, Noti]);
//   }
// }