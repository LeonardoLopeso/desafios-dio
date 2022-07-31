import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`

    * {
        box-sizing: border-box;
        border-style: solid;
        border-width: 0;
        outline: none;
        font-family: 'Press Start 2P', cursive;
        // font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        // 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        // sans-serif;
    }
    
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
    }

`;