import styled from "styled-components";
import {Link} from "react-router-dom";


export default function Header({isLight, handleToggleTheme}) {
  return (
  <Wrapper>
    <h1>Our super Music App</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <button onClick={handleToggleTheme}>switch to {isLight ? "dark" : "light"} theme</button>
  </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  border-bottom: solid 1px;
  padding: 0px 24px;
  & a {
    text-decoration: none;
    color: inherit;
  }
  & a:first-child {
    margin-right: 12px;
  }
`;
