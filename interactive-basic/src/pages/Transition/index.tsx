import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
const Transition = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const [tranEnd, setEnd] = useState(false);

  const clickHandler = useCallback((e: any) => {
    if (ballRef.current) {
      ballRef.current.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }
  }, [ballRef])

  return (
    <Wrap onClick={clickHandler}>
      <Ball onTransitionEnd={() => setEnd(true)} tranEnd={tranEnd} ref={ballRef} />
    </Wrap>
  )
};

export default Transition;

const Wrap = styled.div`
  padding: 20px;
  height: 100vh;
`;

const Ball = styled.div<{ tranEnd: boolean }>`
  position: absolute;
  width:30px;
  height: 30px;
  left:0;
  top:0;
  margin: -15px 0 0 -15px;
  border-radius: 50%;
  background: ${(props) => props.tranEnd ? 'dodgerblue' : 'red'};
  transition: 1s;
`;