import React from "react";
import styled from "styled-components";

export default function ThreeDoor() {
  return (
    <Stage>
      <Door>
        <DoorBack></DoorBack>
        <Character></Character>
        <DoorBody></DoorBody>
      </Door>
      <Door>
        <DoorBack></DoorBack>
        <Character></Character>
        <DoorBody></DoorBody>
      </Door>
      <Door>
        <DoorBack></DoorBack>
        <Character></Character>
        <DoorBody></DoorBody>
      </Door>
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
  /* outline: 2px dashed red; */
`;

const DoorBody = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
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
 `;

const DoorBack = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: black;
`;



const Stage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #333;
`;


