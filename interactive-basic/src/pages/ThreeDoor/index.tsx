import React, { useRef, useCallback, useState } from "react";
import styled from "styled-components";

export default function ThreeDoor() {
  const stageRef = useRef<any>([]);
  const [currentItem, setCurrentItem] = useState({ classList: { remove: (className: string) => { } } }) //현재 활성화된 아이템을 저장

  const doorHandler = useCallback((e: any) => {
    const targetElem = e.target;

    if (currentItem) {
      currentItem.classList.remove('feDrzD');
    }

    if (targetElem.classList.contains('sc-cxabCf')) {
      targetElem.parentNode.classList.add('feDrzD');
      // currentItem = targetElem.parentNode;
      setCurrentItem(targetElem.parentNode)
    }
  }, [currentItem, setCurrentItem])

  return (
    <Stage ref={stageRef} onClick={doorHandler}>
      <Door >
        <DoorBack>
          <Character />
        </DoorBack>
        <DoorBody></DoorBody>
      </Door>
      <Door >
        <DoorBack>
          <Character />
        </DoorBack>
        <DoorBody></DoorBody>
      </Door>
      <Door >
        <DoorBack>
          <Character />
        </DoorBack>
        <DoorBody></DoorBody>
      </Door>
      <DoorOpened ></DoorOpened>
    </Stage>
  )
}


const Character = styled.div`
  position: absolute;
  left:0;
  bottom: 0;
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-size: contain;
  transform: translate3d(100%, 0 ,0 ); // 하드웨어 가속을 이용함
  transition: 0.5s 0.5s; // duration, delay
  /* outline: 2px dashed red; */
`;

const DoorBody = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  transform-origin: 0%; // 축
`;

const Door = styled.div`
  position: relative;
  width: 100px;
  height: 150px;
  /* outline: 2px dashed yellow; */
  :nth-child(1){
    ${Character}{
      background-image: url('images/ilbuni_0.png');
    }
  }
  :nth-child(2){
    ${Character}{
      background-image: url('images/ilbuni_1.png');
    }
  }
  :nth-child(3){
    ${Character}{
      background-image: url('images/ilbuni_2.png');
    }
  }
  :nth-child(1){
    ${DoorBody}{
      background: rgba(255,0,0,0.7)
    }
  }
  :nth-child(2){
    ${DoorBody}{
      background: rgba(0,255,0,0.7)
    }
  }
  :nth-child(3){
    ${DoorBody}{
      background: rgba(0,0,255,0.7)
    }
  }
  /* :hover{
    
  } */
 `;

const DoorOpened = styled(Door)`
  ${DoorBody}{transform: perspective(800px) rotateY(-120deg);} // 회전체 자체에 3d를 주면 일정하게 변경됨
  ${Character}{transform: translate3d(0, 0, 0)}
 `;


const DoorBack = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
  overflow: hidden;
`;



const Stage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #333;
  /* perspective: 800px; // 3d */
`;


