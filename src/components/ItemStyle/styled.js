import styled from 'styled-components';

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Checkbox = styled.input.attrs({
    type: "checkbox",
})`
    padding: 1rem;
`

export const Text = styled.p`
  margin: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: black;
  ${({isFinished}) => isFinished && `text-decoration: line-through; color: gray`};
`;

export const Option = styled.a`
    padding: 1rem;
    text-decoration: none;
    cursor: pointer;
    color: blue;
`;

