const x = 'x';
function c() {
  const y = 'y';
  console.log('c');
}

function a() {
  const x = 'x';
  console.log('a');
  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
  b();
}

a();
/*
a를 호출하면 나오는 출력 값 : a, b, c
*/
c();
/*
c를 호출하면 나오는 출력 값 : c
*/
