import React, { useRef, useCallback } from "react";
import styled, { keyframes } from "styled-components";

export default function Event2() {
  const IlbunRef = useRef<any>([]);
  const clickHandler = useCallback((e: any) => {
    for (let i = 0; i < IlbunRef.current.length; i++) {
      if (IlbunRef.current[i] === e.target) {
        IlbunRef.current[i].remove()
      }

    }
  }, [])
  return (
    <>
      <Stage>
        <IlbuniA
          onClick={clickHandler}
          ref={el => (IlbunRef.current[0] = el)}
        />
        <IlbuniB
          onClick={clickHandler}
          ref={el => (IlbunRef.current[1] = el)}
        />
        <IlbuniC
          onClick={clickHandler}
          ref={el => (IlbunRef.current[2] = el)}
        />
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