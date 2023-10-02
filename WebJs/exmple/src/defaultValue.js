// 명령형 프로그래밍
// function animate(type, duration) {
//   if (duration === undefined) {
//     duration = 300;
//   }

//   // 작업 수행
// }

// 선언적 프로그래밍
function animate(type, duration = 300) {
  console.log(type + ", " + duration);
}

animate('fadeout'); // "fadeout, 300"