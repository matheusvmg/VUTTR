import { createGlobalStyle } from "styled-components";
import colors from "../config/colors";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 20px;
        line-height: 26px;
        background-color: ${colors.darkestWhite};
        font-weight: 400;
        max-width: 100%;
        overflow-x: hidden;
    }
    
    h1 {
        font-size: 2.1.rem;
        line-height: 50px;
        color: #170c3a;
        font-weight: 600;
    }

    h2 {
        font-size: 1.8rem;
        line-height: 40;
        color: #170c3a;
        font-weight: 600;
    }

    h3 {
        font-size: 1.5rem;
        line-height: 36px;
        color: #170c3a;
        font-weight: 600;
    }

    button {
        background-color: transparent;
        outline: 0 none;
        border: 0px;
        border-radius: 5px;
    }

    input {
        border-radius: 5px;
        outline: 0 none;
        border: 0px;
    }
`;

export default GlobalStyle;
