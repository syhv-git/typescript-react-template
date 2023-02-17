import logo from "../../Assets/resources/logo.svg";
import React from "react";
import styled from "styled-components";

const HomeStyle = styled.div`
  width: 100%
  max-height: fit-content;
  display: flex;
  flex-flow: column nowrap;
`;

const Landing = () => {
  return (
    <HomeStyle>
      <img src={ logo } className="App-logo" alt="logo"/>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </HomeStyle>
  );
}

export { Landing }
