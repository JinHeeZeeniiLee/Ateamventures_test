import { createGlobalStyles } from "styled-components";
import reset from "style-sheet";

const GlobalStyles = createGlobalStyles`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }

    * {
        box-sizing: border-box;
    }
`

export default GlobalStyles;