import styled, { css, keyframes } from 'styled-components';

const show = keyframes`
  from{
    opacity: 0;
    transform: translateX(100%);
  }to{
    opacity: 1;
    transform: translateX(0);
  }
`;
const hide = keyframes`
  from{
    opacity: 1;
    transform: translateX(0);
  }to{
    opacity: 0;
    transform: translateX(100%);
  }
`;

export const ToastItem = styled.div`
  ${(props) =>
    props.isSuccess === undefined
      ? css`
          display: none;
          background-color: #a9e5bb;
        `
      : css`
          display: flex;
          background-color: #f72c25;
        `};
  animation: ${({ isShow }) =>
    isShow
      ? css`
          ${show} ease-out 0.3s forwards
        `
      : css`
          ${hide} ease-out 0.3s forwards
        `};
  align-items: center;
  min-width: 200px;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  opacity: 0.7;
  border-radius: 3px;
  transition: all 0.3s ease-out;
  & span {
    margin-right: 0.5rem;
  }
`;
