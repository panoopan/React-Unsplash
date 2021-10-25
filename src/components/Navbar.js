import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { getTopics, getTopicPhotos } from "../WebAPI";
import { ItemsContext } from "../context";

const Root = styled.div`
  grid-area: Navbar;
`;

const Nav = styled.div`
  background: rgba(115, 255, 186, 0.5);
  border-radius: 5%;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    background: rgba(115, 255, 186, 1);
  }

  & ~ div {
    margin-top: 5px;
  }
`;

function Navbar() {
  const [topics, setTopics] = useState([]);
  const { setItems } = useContext(ItemsContext);

  const handleTopicCilck = (topic) => {
    return () => {
      getTopicPhotos(topic).then((data) => {
        setItems(data);
      });
    };
  };

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data);
    });
  }, [topics]);

  return (
    <Root>
      {topics.map((topic) => (
        <Nav onClick={handleTopicCilck(topic.slug)}>{topic.title}</Nav>
      ))}
    </Root>
  );
}

export default Navbar;
