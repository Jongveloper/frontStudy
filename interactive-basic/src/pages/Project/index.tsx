import React from "react";
import styled from "styled-components";

const Project = () => {
  return (
    <>
      {/* <ProgressBarCon>
        <div></div>
      </ProgressBarCon>
      <SelectCharacter>
        <CharacterOne></CharacterOne>
        <CharacterTwo></CharacterTwo>
      </SelectCharacter> */}
      <World>
        <Stage>
          <House>
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
  & > div{

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
  transform: rotateY(90deg) translateZ(100vw);
`;

const WallRight = styled(Wall)`
  left: -500vw;
  width: 1000vw;
  transform: rotateY(90deg);
`;
const WallFront = styled(Wall)`
`;

const WallFrontA = styled(WallFront)`
  
`;

const WallFrontB = styled(WallFront)`
`;

const WallFrontC = styled(WallFront)`
`;

const WallFrontD = styled(WallFront)`
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
