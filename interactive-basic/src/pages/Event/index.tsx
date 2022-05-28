import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Event() {
  const [toggle, setToggle] = useState(false);
  const ilbuniRef = useRef(null);

  const toggleHandler = useCallback(() => {
    setToggle((toggle) => !toggle)
  }, [setToggle])

  return (
    <Wrapper>
      <Characters>
        <A>
          <img src='/images/ilbuni_0.png' alt='일분이' />
        </A>
        <B>
          <img src='/images/ilbuni_1.png' alt='일분이' />
        </B>
        <C toggle={toggle} onClick={toggleHandler} ref={ilbuniRef}>
          <img src='/images/ilbuni_2.png' alt='일분이' />
        </C>
        <D>
          <img src='/images/ilbuni_3.png' alt='일분이' />
        </D>
      </Characters>
    </Wrapper>
  );
}
const special = 'border: 10px dashed red;'

const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  display: block;
`;

const Characters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff000;

  & > div {
    display: inline-block;
  }
`;

const Ilbuni = styled.div`
  width: 100px;
  cursor: pointer;
  & > img{
    max-width: 100%;
    height: auto;
  }
`;



const A = styled(Ilbuni)`
`;
const B = styled(Ilbuni)`
`;
const C = styled(Ilbuni) <{ toggle: boolean }>`
  ${(props) => {
    if (props.toggle) {
      return `
        ${special}
      `
    }
  }}
  
`;

const D = styled(Ilbuni)`
`;