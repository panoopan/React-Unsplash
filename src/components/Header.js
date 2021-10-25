import styled from "styled-components";
import { useState, useContext } from "react";
import { search } from "../WebAPI";
import { ItemsContext } from "../context";

const Root = styled.div`
  background: #a7ffeb;
  grid-area: Header;
  position: sticky;
  top: 0;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 15px;
`;

const Input = styled.input`
  height: 30px;
  width: 100%;
`;

const Button = styled.div`
  background: grey;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  margin-left: 10px;
  position: relative;
  cursor: pointer;

  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 80%;
    height: 1px;
    background: white;
    top: 50%;
    left: 50%;
  }

  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

function Header() {
  const [input, setInput] = useState("");
  const { setItems } = useContext(ItemsContext);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      search(input).then((data) => {
        setItems(data.results);
      });
      setInput("");
    }
  };

  const handleDelete = () => {
    setInput("");
  };

  return (
    <Root>
      <Search onKeyPress={handleSubmit} onChange={handleInput}>
        <Input type="text" value={input} placeholder="Search" />
        <Button onClick={handleDelete} />
      </Search>
    </Root>
  );
}

export default Header;
