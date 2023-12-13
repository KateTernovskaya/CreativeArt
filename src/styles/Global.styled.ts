import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import bgImg from '../assets/images/Bg.webp'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 16px;
    line-height: 160%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: linear-gradient(to bottom,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.9)), url(${bgImg});
    //background-repeat: repeat-y;
    //font-family: 'Kalnia', serif;
  }

  a, a:visited, a:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${theme.colors.font};
  }

  ul {
    list-style: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  section{
    padding: 46px 0;
  }
  
  .accent{
    color: ${theme.colors.accent};
  }
`