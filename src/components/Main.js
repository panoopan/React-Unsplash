import { useContext, useEffect } from "react";
import styled from "styled-components";
import { getPhotos } from "../WebAPI";
import { ItemsContext } from "../context";

const Root = styled.div`
  background: #6fffda;
  grid-area: Main;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Item = styled.div`
  background: white;
  width: 120px;
  height: 120px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  height: 70%;
`;

const Title = styled.div`
  width: 90%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Main({ handleLink }) {
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    getPhotos().then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <Root>
      {items.map((item) => (
        <Item>
          <ImageWrapper>
            <Image src={item.urls.regular} onClick={handleLink(item)} />
          </ImageWrapper>
          <Title>{item.user.name}</Title>
        </Item>
      ))}
    </Root>
  );
}

export default Main;
