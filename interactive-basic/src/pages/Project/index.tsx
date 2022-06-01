import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const Project = () => {
  const HouseRef = useRef<HTMLDivElement>(null);
  const BarRef = useRef<HTMLDivElement>(null);
  const StageRef = useRef<HTMLDivElement>(null);
  let maxScrollValue = 0;

  const resizeHandler = useCallback(() => {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }, [maxScrollValue])

  useEffect(() => {
    const mousePos = { x: 0, y: 0 }
    window.addEventListener('scroll', function () {
      const scrollPer = this.scrollY / maxScrollValue
      const zMove = scrollPer * 980 - 490;
      HouseRef.current!.style.transform = 'translateZ(' + zMove + 'vw)';

      // progressBar
      BarRef.current!.style.width = scrollPer * 100 + '%';
    })
    window.addEventListener('resize', resizeHandler)

    window.addEventListener('mousemove', function (e) {
      // 가운데가 원점이되게
      mousePos.x = -1 + (e.clientX / this.window.innerWidth) * 2;
      mousePos.y = 1 - (e.clientX / this.window.innerHeight) * 2;
      StageRef.current!.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' + (mousePos.x * 5) + 'deg)';
    })
    resizeHandler();
  }, [maxScrollValue, resizeHandler]);
  return (
    <>
      <ProgressBarCon>
        <div ref={BarRef}></div>
      </ProgressBarCon>
      {/* <SelectCharacter>
        <CharacterOne></CharacterOne>
        <CharacterTwo></CharacterTwo>
      </SelectCharacter> */}
      <World>
        <Stage ref={StageRef}>
          <House ref={HouseRef}>
            <WallLeft></WallLeft>
            <WallRight></WallRight>
            <WallFrontA>
              <WallContent>
                <WallTitle>안녕하세요</WallTitle>
              </WallContent>
            </WallFrontA>
            <WallFrontB>
              <WallContent>
                <WallTitle>Hello</WallTitle>
              </WallContent>
            </WallFrontB>
            <WallFrontC>
              <WallContent>
                <WallTitle>Hola</WallTitle>
              </WallContent>
            </WallFrontC>
            <WallFrontD>
              <WallContent>
                <WallTitle>こんにちは</WallTitle>
              </WallContent>
            </WallFrontD>
          </House>
        </Stage>
      </World>
    </>
  )
};

export default Project;




const ProgressBarCon = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 5px;
  background: #555;
  z-index: 100;
  & > div{
    width: 0;
    height: 100%;
    background: #00a8ff;
  }
`;

const SelectCharacter = styled.div`

`;

const SelectCharacterButton = styled.button`

`;

const CharacterOne = styled(SelectCharacterButton)`

`

const CharacterTwo = styled(SelectCharacterButton)`
  
`

const World = styled.div`
  position: fixed;
  left:0;
  top: 0;
  width: 100vw;
  height: 100vh;
  perspective: 1000px;
`;

const Stage = styled.div`
  position: absolute;
  left:0;
  top: 0;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
`;

const House = styled.div`
  width: 100vw;
  height: 100vh;
  transform: translateZ(-490vw);
  transform-style: preserve-3d;
`;

const Wall = styled.section`
  position: absolute;
  left:0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
`;

const WallLeft = styled(Wall)`
  left: -500vw;
  width: 1000vw;
  background: #f8f8f8;
  transform: rotateY(90deg) translateZ(100vw);
`;

const WallRight = styled(Wall)`
  left: -500vw;
  width: 1000vw;
  background: #f8f8f8;
  transform: rotateY(90deg);
`;
const WallFront = styled(Wall)`
`;

const WallFrontA = styled(WallFront)`
  transform: translateZ(300vw);
  
`;

const WallFrontB = styled(WallFront)`
  transform: translateZ(50vw);
`;

const WallFrontC = styled(WallFront)`
  transform: translateZ(-200vw);
`;

const WallFrontD = styled(WallFront)`
  transform: translateZ(-500vw);
`;

const WallContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const WallTitle = styled.h2`
  font-size: 5rem;
`;
