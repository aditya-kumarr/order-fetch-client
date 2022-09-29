import { createGlobalStyle } from "styled-components";

 const GlobalStyles = createGlobalStyle`
*,*::after,*::before{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

h1,h2,h3,h4,h5,h6,div,p{
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 500;
}

`;
export default GlobalStyles;