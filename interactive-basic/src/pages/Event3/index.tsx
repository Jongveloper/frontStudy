import React, { useRef, useCallback } from "react";
import styled, { keyframes } from "styled-components";

export default function Event3() {
  const IlbunRef = useRef<any>([]);
  const clickHandler = useCallback((e: any) => {
    if (IlbunRef.current === e.target) return
    IlbunRef.current.removeChild(e.target)
  }, [])
  return (
    <>
      <Stage onClick={clickHandler} ref={IlbunRef}>
        <IlbuniA />
        <IlbuniB />
        <IlbuniC />
      </Stage>
    </>
  )
}


const moving = keyframes`
  from {
    transform: translateX(0);
  } to {
    transform: translateX(90vw);
  }
`;

const Stage = styled.div`
  overflow:hidden;
  position: relative;
  width: 100vw;
  height: 75vw;
  background: #FFF000;
`;

const IlbuniStyle = styled.div`
  position:absolute;
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  animation: ${moving} infinite alternate;
  /* :nth-of-type(1){
    background-image: url('/images/ilbuni_0.png');
  }
  :nth-of-type(2){
    background-image: url('/images/ilbuni_1.png');
  }
  :nth-of-type(3){
    background-image: url('/images/ilbuni_2.png');
  } */
`;

const IlbuniA = styled(IlbuniStyle)`
  left:5%;
  bottom: 5%;
  background-image: url('/images/ilbuni_0.png');
  animation-duration: 2s;
`;

const IlbuniB = styled(IlbuniStyle)`
  left:10%;
  bottom: 3%;
  background-image: url('/images/ilbuni_1.png');
  animation-duration: 3s;
`;

const IlbuniC = styled(IlbuniStyle)`
  left:7%;
  bottom: 10%;
  background-image: url('/images/ilbuni_2.png');
  animation-duration: 4s;
`;