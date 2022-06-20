import styled, { ThemeProvider } from "styled-components"; 
import GlobalStyle from "./GlobalStyle";
import lightTheme from "components/themes/light.json";
import darkTheme from "components/themes/dark.json";
import { useState } from "react";

export default function Layout({ children }) {
  const [isLight, setIsLight] = useState(true);

  function handleToggleTheme(){
    setIsLight(!isLight);
  }
  
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <wrapper>
        <GlobalStyle/>
        {children}
        <button onClick={handleToggleTheme}>switch to {isLight ? "dark" : "light"} theme</button>
      </wrapper>
    </ThemeProvider>

  );
}

const wrapper = styled.div``;

