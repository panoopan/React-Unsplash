import styled from "styled-components";
import banners from "../images/banners";
import { useState, useEffect } from "react";

const Root = styled.div`
  height: 20vh;
  grid-area: Banner;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.slide});
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Arrow = styled.div`
  background: rgba(128, 128, 128, 0.7);
  height: 40px;
  width: 30px;
  border-radius: 10%;
  position: relative;
  cursor: pointer;

  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 60%;
    height: 3px;
    background: white;
    top: 50%;
    left: 50%;
  }

  &:after {
    transform: translate(-50%, 200%)
      ${(props) =>
        props.order === "next" ? `rotate(-45deg)` : `rotate(45deg)`};
  }

  &:before {
    transform: translate(-50%, -200%)
      ${(props) =>
        props.order === "next" ? `rotate(45deg)` : `rotate(-45deg)`};
  }
`;

const DotWrapper = styled.div`
  text-align: center;
  align-self: end;
`;

const Dot = styled.div`
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 8px;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  background: ${(props) =>
    props.className === "active"
      ? `rgba(255, 255, 255, 1)`
      : `rgba(255, 255, 255, 0.5)`};

  &:hover {
    transform: scale(1.2);
  }
`;

function Banner() {
  const images = [...banners];
  const [current, setCurrent] = useState(0);
  const [slide, getSlide] = useState(images[current]);

  const handlePrevClick = () => {
    current === 0 ? setCurrent(images.length - 1) : setCurrent(current - 1);
  };

  const handleNextClick = () => {
    current === images.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };

  const handleDotClick = (e) => {
    setCurrent(Number(e.target.id));
  };

  useEffect(() => {
    getSlide(images[current]);
    const handleAutoplay = setInterval(handleNextClick, 2000);
    return () => clearInterval(handleAutoplay);
  }, [current, images]);

  return (
    <Root slide={slide}>
      <ArrowWrapper>
        <Arrow order="prev" onClick={handlePrevClick}></Arrow>
        <Arrow order="next" onClick={handleNextClick}></Arrow>
      </ArrowWrapper>
      <DotWrapper>
        {images.map((data, i) => (
          <Dot
            id={i}
            className={current === i && "active"}
            onClick={handleDotClick}
          />
        ))}
      </DotWrapper>
    </Root>
  );
}

export default Banner;
