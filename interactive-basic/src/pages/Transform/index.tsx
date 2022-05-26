import React from "react";
import styled from 'styled-components'

const Transform = () => {
  return (
    <>
      <h1>CSS Transform</h1>
      <p>
        토이 프로젝트를 하다보면 정말 많은 것을 배우는 것 같다.
        토이프로젝트를 진행함에 있어서 아직 부족한 점이 많지만
        점점 발전해서 좋은 개발자가 될 수 있도록 노력해야겠다!
        파이팅!👍👍👍👍👍
        토이 프로젝트를 하다보면 정말 많은 것을 배우는 것 같다.
        토이프로젝트를 진행함에 있어서 아직 부족한 점이 많지만
        점점 발전해서 좋은 개발자가 될 수 있도록 노력해야겠다!
        파이팅!👍👍👍👍👍
      </p>
      <BoxContainer>
        <div>A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
      </BoxContainer>
      <p>
        토이 프로젝트를 하다보면 정말 많은 것을 배우는 것 같다.
        토이프로젝트를 진행함에 있어서 아직 부족한 점이 많지만
        점점 발전해서 좋은 개발자가 될 수 있도록 노력해야겠다!
        파이팅!👍👍👍👍👍
        토이 프로젝트를 하다보면 정말 많은 것을 배우는 것 같다.
        토이프로젝트를 진행함에 있어서 아직 부족한 점이 많지만
        점점 발전해서 좋은 개발자가 될 수 있도록 노력해야겠다!
        파이팅!👍👍👍👍👍
      </p>
    </>
  )
}

export default Transform;

const BoxContainer = styled.div`
  display: flex;

  & > div{
    width: 100px;
    height: 100px;
    border: 2px solid black;
    background: rgba(255, 255, 0, 0.7);
    transition: 1s cubic-bezier(0.25, 0.1, 0.49, 1.73); // 애니메이션
    :hover{
      /** width와 height를 쓰면 기존 컨텐츠를 밀어냄 */
      /* transform: scale(2) rotate(45deg); //크기 조절 1은 100퍼센트 크기 2는 두배 */
      /* transform: skewY(-30deg); // 수평 방향 조절 */
      /* transform: translate(30px, 10px); // 첫 번째 인자 x축 두 번째 인자 y축 */
      /* transform: translateX(30px); */
      /* transform: translateY(30px); */
      /* transform-origin: 30% 60%; // 기준 */
      transform: scale(2);
      background: red;
    }
  }
`;