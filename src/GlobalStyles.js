import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
/* CSS RESET */
/* meyerweb.com/eric/tools/css/reset/ */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, ::-moz-focus-outer, header, hgroup, ::-moz-range-thumb, nav, section{
    display:block;
}

ol, ul {
     list-style:none;
}
blockquote, q {
    quotes:none
}

blockquote::before, blockquote::after, q::before, q:after{
    content:"";
    content:none;
}
table{
    border-collapse: collapse;
    border-spacing:0;
}
/* global styles  */
*,
*:before, 
*:after{
    box-sizing: border-box;
    line-height: 1.45;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smooth: auto;
}
h1, h2, h3, h4, h5, h6, p{
    text-rendering: optimizeLegibility;
}
p{
    margin-bottom: 1.5em;
    font-size: 1.125rem;
}
em{
    font-style: italic;
}
`;
export default GlobalStyles;
