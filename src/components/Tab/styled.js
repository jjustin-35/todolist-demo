import styled from 'styled-components';

export const TabButton = styled.button`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: black;
    font-weight: bold;
    border-width: 1px;
    /* border-color: ${({active}) => active ? "black black white black" : "white white black white"}; */
    background-color: white;
    width: 100%;
`

export const TabButtons = styled.div`
    display: flex;
    width: 100%;
`;

