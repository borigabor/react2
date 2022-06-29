import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        font-family: 'Sirin Stencil', cursive;
    }

    body{
        overflow-x: hidden;
    }

    h1,h2,h3,h4,h5,h6{
        padding: 0;
        margin: 0;
    }

    a{
        color: inherit;
    }
`;

export default GlobalStyle;