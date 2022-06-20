import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    transition : linear 0.25s;
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
  h1 {
    font-size: 1.6rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  button {
    font-family: inherit;
    padding: 12px 20px;
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
  button:hover {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.backgroundColor};
    cursor: pointer;
    transition: linear 0.25s;
  }
`;

export default GlobalStyle;