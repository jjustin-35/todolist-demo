import styled from 'styled-components';

export const TabButton = styled.button`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: black;
    font-weight: bold;
    border-width: 1px;
    ${({active}) => active ? `border-color: black black white black` : `border-color: white white black white`};
    background-color: white;
    border-style: solid;
    width: 100%;
    cursor: pointer;
`

export const TabButtons = styled.div`
    display: flex;
    width: 100%;
`;

