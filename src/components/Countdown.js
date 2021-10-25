import styled from "styled-components";
import { useState, useEffect } from "react";

const Root = styled.div`
  background: #18ffff;
  grid-area: Countdown;
`;

const Time = styled.div`
  padding: 20px;
`;

function Countdown() {
  const countDownSecond = 300;
  const startTime = Date.now();
  const [remainSecond, setRemainSecond] = useState(0);

  useEffect(() => {
    const countDownTimer = setInterval(() => {
      const pastSeconds = parseInt((Date.now() - startTime) / 1000);
      const remain = countDownSecond - pastSeconds;
      setRemainSecond(remain < 0 ? 0 : remain);

      if (remain <= 0) {
        clearInterval(countDownTimer);
      }
    }, 1000);

    return () => {
      clearInterval(countDownTimer);
    };
  }, []);

  return (
    <Root>
      <Time>
        倒數 {new Date(remainSecond * 1000).toISOString().substring(11, 19)}
      </Time>
    </Root>
  );
}

export default Countdown;
