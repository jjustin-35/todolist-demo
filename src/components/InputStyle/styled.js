import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export const Input = styled.input.attrs({
    type: "text",
    placeholder: "Please enter todo here..."
})`
    width: 100%; 
`

export const AddButton = styled.button`
    ${({bgColor = "blue"}) => `background-color: ${bgColor}`};
    ${({textColor = "white"})=> `color: ${textColor}`};
    cursor: pointer;
    padding: .5rem 1rem;
    border: none;
    white-space: nowrap;
`