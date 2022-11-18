import styled from 'styled-components';

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