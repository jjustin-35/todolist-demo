import styled from 'styled-components';

export const Brand = styled.div`
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    color: ${props => props.apearance??"black"};
`