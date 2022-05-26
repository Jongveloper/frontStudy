import React from "react";
import styled, { keyframes } from 'styled-components'

const Animation = () => {
  return (
    <Wrapper>
      <h1>Animation</h1>
      <Box>Box</Box>
    </Wrapper>
  )
}

export default Animation;

const Wrapper = styled.div`
  padding:20px;
`;

const sampleAni = keyframes`
  0%{
    transform: translate(0, 0);
  }
  50%{
    background: red;
    transform: translate(300px, 0);
  }
  100%{
    transform: translate(400px, 500px);
  }
`;
const Box = styled.div`
  display: flex;
  width: 100px;
  height:100px;
  border: 2px solid #000;
  background: #fff000;
  align-items: center;
  justify-content: center;
  animation: ${sampleAni} 3s linear forwards; // linear === 등속도, alternate: 시작부터 끝까지 갔다가 반대방향으로 재생 forwards: 애니메이션 끝에 머무르기
  :hover{
    animation-play-state: paused; // 마우스 올렸을 때 멈추기
  }
`;