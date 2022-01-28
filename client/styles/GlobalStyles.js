import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
  width: 7px;
}
/* Track */
::-webkit-scrollbar-track {
  background: var(--white);
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--dark-black);
  border-radius: 100px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--marron);
}
  :root{
    --dark-black: #000;
    --light-black:#646262;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
    --marron: #D3AD7F
  }
  html{
    font-size: 16px;
    user-select: none;
    background-color: var(--white);
  font-family:  'Poppins', sans-serif;
  }
  body {
    overflow-x: hidden;
    /* overflow: hidden ; */
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none !important;
    color: inherit;
  } 
  @media screen and (max-width: 400px) {
      html{
    font-size: 14px;
  }
  } 
  @media screen and (max-width: 300px) {
  html {
    font-size: 12px !important;
  }
}
`;
export default GlobalStyles;
