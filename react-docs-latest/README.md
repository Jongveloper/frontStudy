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

--- 

# Writing markup with JSX
위에서 본 마크업 구문을 JSX라고 합니다.
선택 사항이지만 대부분의 React 프로젝트는 편의를 위해 JSX를 사용합니다.
JSX는 HTML보다 엄격합니다. <br/>과 같은 태그를 닫아야합니다.
또한 컴포넌트는 여러 JSX태그를 반환할 수 없습니다.
`<div>...</div>` 또는 빈 `<>...</>` 래퍼와 같은 상위 항목으로 래핑해야합니다.