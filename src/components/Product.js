import styled from "styled-components";

const Root = styled.div`
  background: white;
  height: 300px;
  width: 300px;
  border-radius: 5px;
  padding: 10px 0;
`;

const ImageWrapper = styled.div`
  text-align: center;
  height: 80%;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 10px;
`;

function Product({ item }) {
  return (
    <Root>
      <ImageWrapper>
        <Image src={item.urls.small} />
      </ImageWrapper>
      <Title> {item.alt_description}</Title>
    </Root>
  );
}

export default Product;
