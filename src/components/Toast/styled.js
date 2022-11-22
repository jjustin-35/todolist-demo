import styled from 'styled-components';

export const ToastItem = styled.div`
    ${({isSuccess}) => isSuccess === undefined ? `display: none` : "display: flex;"};
    ${({isSuccess})=>isSuccess ? `background-color: #A9E5BB;` : `background-color: #F72C25;`};
    align-items: center;
    min-width: 200px;
    padding: 1rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    opacity: 0.7;
    border-radius: 3px;
    & span{
        margin-right: .5rem;
    }
`