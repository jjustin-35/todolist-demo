import styled from 'styled-components';

// const show = keyframes`
//   from{
//     transform: scale(0);
//     opacity: 0;
//   }to{
//     transform: scale(1);
//     opacity: 1;
//   }
// `

export const ItemWrapper = styled.div`
  transition: all 0.25s ease-out;
  ${({ isShow }) =>
    isShow
      ? `opacity: 1;
    transform: scale(1);`
      : `opacity: 0;
    transform: scale(0);`};
`;

export const Text = styled.p`
  margin: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  color: black;
  ${({ isFinished }) => isFinished && `text-decoration: line-through; color: gray`};
  width: 100%;
`;

export const ContentWrapper = styled.div`
  ${({ show }) => (show ? `display: flex` : `display: none`)};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const EditInput = styled.input.attrs(({ preValue }) => ({
  type: 'text',
  defaultValue: preValue,
}))`
  width: 100%;
  margin-right: 1rem;
  margin-left: 1rem;
  font-size: 1rem;
`;

export const Option = styled.a`
  font-size: 0.5rem;
  padding: 0 0.25rem;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  ${({ color = 'black' }) => `color: ${color}`};
  white-space: nowrap;
  vertical-align: middle;
`;
