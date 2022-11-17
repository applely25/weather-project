import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Day from "./components/day";

function App() {
  // axios
  //   .get("http://localhost:8080/data")
  //   .then((Response) => {
  //     data = Response.data.allData;
  //   })
  //   .catch((Error) => {
  //     console.log(Error);
  //   });

  // let data = {
  //   week: [
  //     {
  //       month: 0,
  //       day: 0,
  //     },
  //   ],
  //   lowtemp: [],
  //   higtemp: [],
  //   rainfall: [],
  // };

  // const OnClickSubmit = () => {
  //   console.log(data);
  // };
  const [weekData, setWeekData] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  const [lowTempData, setLowTempData] = useState([]);
  const [highTempData, setHighTempData] = useState([]);
  const [rainData, setRainData] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  useEffect(() => {
    fetch("http://localhost:8080/data")
      .then((res) => res.json())
      .then((data) => {
        setWeekData(data.week);
        setLowTempData(data.lowtemp);
        setHighTempData(data.hightemp);
        setRainData(data.rainfall);
      });
  }, []);

  return (
    <>
      <BackGround>
        <WrapperDay>
          <FiveWrapper>
            <Day
              month={weekData[0].month}
              day={weekData[0].day}
              low={lowTempData[0]}
              high={highTempData[0]}
              sun={rainData[0].sun}
              moon={rainData[0].moon}
            />
            <Day
              month={weekData[1].month}
              day={weekData[1].day}
              low={lowTempData[1]}
              high={highTempData[1]}
              sun={rainData[1].sun}
              moon={rainData[1].moon}
            />
            <Day
              month={weekData[2].month}
              day={weekData[2].day}
              low={lowTempData[2]}
              high={highTempData[2]}
              sun={rainData[2].sun}
              moon={rainData[2].moon}
            />
            <Day
              month={weekData[3].month}
              day={weekData[3].day}
              low={lowTempData[3]}
              high={highTempData[3]}
              sun={rainData[3].sun}
              moon={rainData[3].moon}
            />
            <Day
              month={weekData[4].month}
              day={weekData[4].day}
              low={lowTempData[4]}
              high={highTempData[4]}
              sun={rainData[4].sun}
              moon={rainData[4].moon}
            />
          </FiveWrapper>
          <FiveWrapper>
            <Day
              month={weekData[5].month}
              day={weekData[5].day}
              low={lowTempData[5]}
              high={highTempData[5]}
              sun={rainData[5].sun}
              moon={rainData[5].moon}
            />
            <Day
              month={weekData[6].month}
              day={weekData[6].day}
              low={lowTempData[6]}
              high={highTempData[6]}
              sun={rainData[6].sun}
              moon={rainData[6].moon}
            />
            <Day
              month={weekData[7].month}
              day={weekData[7].day}
              low={lowTempData[7]}
              high={highTempData[7]}
              sun={rainData[7].sun}
              moon={rainData[7].moon}
            />
            <Day
              month={weekData[8].month}
              day={weekData[8].day}
              low={lowTempData[8]}
              high={highTempData[8]}
              sun={rainData[8].sun}
              moon={rainData[8].moon}
            />
            <Day
              month={weekData[9].month}
              day={weekData[9].day}
              low={lowTempData[9]}
              high={highTempData[9]}
              sun={rainData[9].sun}
              moon={rainData[9].moon}
            />
          </FiveWrapper>
        </WrapperDay>
        {/* <GetButton onClick={OnClickSubmit}>새로고침</GetButton> */}
      </BackGround>
      <ErrorMessage>
        죄송합니다. 화면 사이즈를 키우고 이용해 주세요
      </ErrorMessage>
    </>
  );
}

export default App;
const ErrorMessage = styled.h1`
  display: none;
  margin: auto;
  @media screen and (max-width: 1001px) {
    display: block;
  }
`;
const BackGround = styled.div`
  background-color: #22709b;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1001px) {
    display: none;
  }
`;
const GetButton = styled.button`
  height: 30px;
`;
const WrapperDay = styled.div`
  width: 998px;
  height: 606px;
  margin: auto;
  flex-direction: column;
`;

const FiveWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
