import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
 :root {
    --nav-color: #1b546f;
    --text-color: #2d8ab7;
    --title-color: #34CB79;
    --text-second: #7a7a7a;
    --background-color: #faefde;
  }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    html{
        scroll-behavior: smooth;
    }
    body, #root{
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        background-color: #D2DbDC;
        font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
    }
    body , input , button{
        font-size: 16px;
    }

    h1,h2,h3,h4,h5,h6, strong{
        font-weight: 500;
    }
    button{
        cursor: pointer;
    }
`;
