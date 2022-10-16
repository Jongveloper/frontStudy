# Axios란?
`Axios`는 `node.js`와 브라우저를 위한 `Promise 기반` HTTP 클라이언트 입니다.
동일한 코드베이스로 브라우저와 `node.js`에서 실행할 수 있습니다.

# 특징
- 브라우저를 위해 [XMLHttpRequests](#xmlhttprequest) 생성
- node.js를 위해 http 요청 생성
- Promise API를 지원
- 요청 및 응답 인터셉트
- 요청 및 응답 데이터 변환
- 요청 취소
- JSON 데이터 자동 변환
- XSRF를 막기위한 클라이언트 사이드 지원

# 설치
```shell
npm install axios
```

# 기본 예제
`GET` 요청 수행하기
```js
const axios = require('axios');

axios.get('/user?ID=12345')
  .then(function (response) {
    // 성공 핸들링
    console.log(response);
  })
  .catch(function (error) {
    // 에러 핸들링
    console.log(error);
  })
  .then(function () {
    // 항상 실행되는 영역
  })
// 선택적으로 위의 요청은 다음과 같이 수행될 수 있습니다.
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 항상 실행되는 영역
  });  
// async/await을 사용한다면,
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
```
`Post` 요청 수행하기
```js
axios.post('/user', {
  firstName: 'Woo',
  lastName: 'JongHyuk'
})
.then(function (response) {
  console.log(response)
})
.catch(function (error) {
  console.log(error);
})
```
여러 동시 `POST` 요청 수행하기
```js
function getUserAccount() {
  return axios.get('/user/12345')
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```


### XMLHttpRequest
`XMLHttpRequest` 객체는 서버와 상호작용할 때 사용합니다.
XHR을 사용하면 페이지의 새로고침 없이도 URL에서 데이터를 가져올 수 있습니다.
`XMLHttpRequest`는 [AJAX](#ajax) 프로그래밍에 많이 사용됩니다.
이름에 `XML`이 들어가긴 하지만, `XMLHttpRequest`은 XML 뿐만 아니라 모든 종류의 데이터를 가져올 수 있습니다.


### AJAX
AJax란 비동기 자바스크립트와 XML을 말합니다.
간단히 말하면, 서버와 통신하기 위해 `XMLHttpRequest` 객체를 사용하는 것을 말합니다.
JSON, XML, HTML 그리고 일반 텍스트 형식 등을 포함한 다양한 포맷을 주고 받을 수 있습니다.
AJAX의 강력한 특징은 페이지 전체를 리프레쉬 하지 않고서도 수행되는 비동기성입니다.
이러한 비동기성을 통해 사용자의 이벤트가 있으면 전체 페이지가 아닌 일부분만을 업데이트할 수 있게 해줍니다.

#### 주요 두가지 특징
- 페이지 새로고침 없이 서버에 요청
- 서버로부터 데이터를 받고 작업을 수행



### 참고
[axios](https://axios-http.com/kr/docs/intro)
[XMLHttpReuqest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)
[AJAX](https://developer.mozilla.org/ko/docs/Web/Guide/AJAX/Getting_Started)