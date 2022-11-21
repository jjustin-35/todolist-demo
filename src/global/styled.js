import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`

const gutter = 24;
export const mediaRule = {
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
  };

// grid
export const Container = styled.div`
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 12px;
    padding-right: 12px;
    @media (min-width: ${mediaRule.md}) {
        max-width: 900px;
    }
    @media (min-width: ${mediaRule.lg}) {
        max-width: 1440px;
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: ${({justify = "center"}) => justify};
`

const countWidth = (col) => col * (1/12) * 100;

export const Col = styled.div`
    width: ${({xs}) => countWidth(xs)}%;
    padding-left: ${gutter / 2}px;
    padding-right: ${gutter / 2}px;

    @media (min-width: ${mediaRule.md}) {
        width: ${({md}) => countWidth(md)}%;
    }
    @media (min-width: ${mediaRule.lg}) {
        width: ${({lg}) => countWidth(lg)}%;
    }
    @media (min-width: ${mediaRule.xl}) {
        width: ${({xl}) => countWidth(xl)}%;
    }
    
`