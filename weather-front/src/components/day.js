import styled from "styled-components";

const Day = ({ month, day, low, high, sun, moon }) => {
  return (
    <Wrapper>
      <Date>
        {month}월 {day}일
      </Date>
      <Weather>
        <EachWrapper>
          <Title>강수 확률</Title>
          <RainWrapper>
            <Wrap>
              <RainValue>{sun}%</RainValue>
              <Check>오전</Check>
            </Wrap>
            <Wrap>
              <RainValue>{moon}%</RainValue>
              <Check>오후</Check>
            </Wrap>
          </RainWrapper>
        </EachWrapper>
        <EachWrapper>
          <Title>온도</Title>
          <RainWrapper>
            <Wrap>
              <HighTempValue>{low}</HighTempValue>
              <Check>최저기온</Check>
            </Wrap>
            <Wrap>
              <LowTempValue>{high}</LowTempValue>
              <Check>최고기온</Check>
            </Wrap>
          </RainWrapper>
        </EachWrapper>
      </Weather>
    </Wrapper>
  );
};

export default Day;

const Wrapper = styled.div`
  width: 165px;
  height: 288px;
`;
const Date = styled.h1`
  margin: auto;
  margin-left: 10px;
  margin-bottom: 5px;
`;
const Weather = styled.div`
  background-color: white;
  height: 224px;
`;
const Title = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #616161;
  margin: 0;
  padding-top: 10px;
  padding-left: 10px;
`;
const RainWrapper = styled.div`
  display: flex;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const RainValue = styled.p`
  font-size:25px;
  font-weight: bold;
  margin: auto;
`;
const Check = styled.p`
  font-size: 15px;
  margin: auto;
`;
const HighTempValue = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin: auto;
  color: blue;
`;
const LowTempValue = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin: auto;
  color: red;
`;
const EachWrapper = styled.div`
  padding-top: 13px;
`;
