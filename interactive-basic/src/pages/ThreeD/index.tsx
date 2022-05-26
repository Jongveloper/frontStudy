import React from "react";
import styled from "styled-components";

export default function ThreeD() {
  return (
    <Wrapper>
      <Card>
        <CardSideFront>
          F
        </CardSideFront>
        <CardSideBack>
          B
        </CardSideBack>
      </Card>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 80vw;
  height: 80vh;
  background: #fff000;
  perspective: 500px; // 3D 단체로 주는 상황

  :hover > div{
    transform: rotateY(180deg);
  }
`;


const Card = styled.div`
  position: relative;
  width: 100px;
  height: 150px;
  margin: 1em;
  transform: rotateY(0deg);
  transition: 1s;
  transform-style: preserve-3d; // 안에 있는 애들까지 3d 효과를 주려면 필요
  /* transform-origin: left; // 문처럼 */
  /* transform: perspective(500px) rotateY(45deg); // 개별로 주는 상황 */
`;

const CardSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left:0;
  top:0;
  width: 100%;
  height:100%;
  border-radius: 0.5em; // font-size 기준
  font-size: 1.5rem; // 최상위 요소 기준
  backface-visibility: hidden; // 쓸데없이 보이는 뒷면을 가려주는 용도
`;

const CardSideFront = styled(CardSide)`
  z-index: 1;
  background-color: white;
  
`;

const CardSideBack = styled(CardSide)`
  background-color: red;
  transform: rotateY(-180deg);
`;