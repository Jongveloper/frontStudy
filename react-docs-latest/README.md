# 컴포넌트 생성 및 중첩
리액트 앱은 컴포넌트로 구성됩니다.
컴포넌트는 UI(사용자 인터페이스)와 고유한 로직을 가질 수 있습니다.
컴포넌트는 버튼만큼 작을 수도 있고 전체 페이지만큼 클 수도 있습니다.
```jsx
const Button = () => {
  return (
    <button>I'm a button</button>
  )
}

export default Button;
```

```jsx
import Button from "./shared/components/Button";

const Components = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Button />
    </div>
  )
}

export default Components;
```

컴포넌트의 이름은 항상 대문자로 시작해야 하며 HTML 태그는 소문자여야합니다.
