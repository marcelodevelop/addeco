import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial;
    }

    #root {
        height: 100%;
    }

    html, body {
        height: 100%;
    }
`

export default GlobalStyle