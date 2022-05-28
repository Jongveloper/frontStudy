import React from "react";
import styled from "styled-components";

export default function Flex() {
  return (
    <Wrap>
      <Container>
        <Item>AAA</Item>
        <Item>B</Item>
        <Item>CCCCCC</Item>
        <Item>DDD</Item>
        <Item>E</Item>
      </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 5px;
`;


const Container = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* justify-content: center; */
  /* align-items: center; */
  height: 80vh;
  background: gray;
`;

const Item = styled.div`
  /* flex-grow: 1; // 컨텐츠를 제외한 여백을 기준 */
  /* flex-grow: 1; // 컨텐츠를 제외한 여백을 기준
  flex-basis: 0; // 원래 컨텐츠가 차지하는 영역을 어떻게할 것인가에 대한 세팅 */
  flex: 1;// 축약형
  border: 3px solid black;
  background: white;
  /* padding: 2em; */
  /* :nth-child(1){flex-grow: 1;}
  :nth-child(2){flex-grow: 5;}
  :nth-child(3){flex-grow: 2;}
  :nth-child(4){flex-grow: 3;}
  :nth-child(5){flex-grow: 1;} */
`;