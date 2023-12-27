import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import bgImg from '../assets/images/bg.webp'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *::-webkit-scrollbar{
    width: 20px;
  }
  
  *::-webkit-scrollbar-track{
    background-color: rgba(0, 0, 0, 1);
  }

  *::-webkit-scrollbar-thumb{
      background-color: ${theme.colors.accent};
    border: 3px solid rgba(0, 0, 0, 0.9);
    height: 10px;
    border-radius: 16px;
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

  section {
    padding: 92px 0;

    @media ${theme.media.mobile} {
      padding: 60px 0;
    }
  }

  .accent {
    color: ${theme.colors.accent};
  }
`