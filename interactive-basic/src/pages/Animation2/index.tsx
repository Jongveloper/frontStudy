import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

const Animation2 = () => {
  const [ballEnd, setBallEnd] = useState(false);
  const ballRef = useRef<HTMLDivElement>(null);

  return (
    <Wrap >
      <Ball ballEnd={ballEnd} onAnimationEnd={() => setBallEnd(true)} ref={ballRef} />
    </Wrap>
  )
};
export default Animation2;

const BallAni = keyframes`
  from{
    transform: translate(0,0);
  }to{
    transform: translate(200px, 200px)
  }
`

const Wrap = styled.div`
  padding: 0px;
  height: 100vh;
`;

const Ball = styled.div<{ ballEnd: boolean }>`
  position: absolute;
  width:30px;
  height: 30px;
  left:0;
  top:0;
  margin: -15px 0 0 -15px;
  border-radius: 50%;
  background: red;
  animation: ${BallAni} 1s 3 alternate forwards;
  border: ${(props) => props.ballEnd && '5px solid dodgerblue'}
`;