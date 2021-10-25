import styled from "styled-components";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Countdown from "../components/Countdown";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

import { useState } from "react";
import Product from "../components/Product";

const Container = styled.div`
  max-width: 70vw;
  margin: 50px auto;
`;

const Mask = styled.div`
  width: 100%;
  position: absolute;
  background: rgba(128, 128, 128, 0.5);
  top: 0;
  left: 0;
  bottom: 0;
`;

const ProductWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 0.3fr 2fr 0.3fr 2fr;
  grid-template-areas:
    "Header Header"
    "Banner Banner"
    "Countdown Countdown"
    "Navbar Main";
  grid-gap: 0.5rem;
`;

function HomePage() {
  const [popup, setPopup] = useState();

  const handleLink = (item) => {
    return () => {
      setPopup(item);
    };
  };

  return (
    <Container popup={popup}>
      {popup && (
        <Mask
          onClick={() => {
            setPopup();
          }}
        />
      )}
      {popup && (
        <ProductWrapper>
          <Product item={popup}></Product>
        </ProductWrapper>
      )}
      <Wrapper>
        <Header />
        <Banner />
        <Countdown />
        <Navbar />
        <Main handleLink={handleLink} />
      </Wrapper>
    </Container>
  );
}

export default HomePage;
