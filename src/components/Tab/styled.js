import styled from 'styled-components';

export const TabButton = styled.button`
    border: none;
    border-bottom: 2px solid;
    font-weight: bold;
    ${({active}) => active ? `color: black; border-color: black` : `color: #aaa8a8; border-color: #aaa8a8`};
    background-color: #fff;
    width: 100%;
    cursor: pointer;
`

export const TabButtons = styled.div`
    display: flex;
    width: 100%;
`;

