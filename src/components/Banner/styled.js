import styled from 'styled-components';

export const Brand = styled.div`
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    color: ${props => props.apearance??"black"};
`