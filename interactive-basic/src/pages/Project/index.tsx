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
                <WallTitle>こんにちは</WallTitle>
              </WallContent>
            </WallFrontC>
            <WallFrontD>
              <WallContent>
                <WallTitle>Hola</WallTitle>
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

`;

const Stage = styled.div`
`;

const House = styled.div`
`;

const Wall = styled.section`
`;

const WallLeft = styled(Wall)`
`;

const WallRight = styled(Wall)`
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
`;

const WallTitle = styled.h2`
`;
