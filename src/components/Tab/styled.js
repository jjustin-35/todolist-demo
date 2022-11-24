import styled, { css } from 'styled-components';

export const TabButton = styled.button`
  border: none;
  border-bottom: 2px solid;
  font-weight: bold;
  ${(props) =>
    props.isActive
      ? css`
          color: black;
          border-color: black;
        `
      : css`
          color: #aaa8a8;
          border-color: #aaa8a8;
        `};
  background-color: #fff;
  width: 100%;
  cursor: pointer;
`;

export const TabButtons = styled.div`
  display: flex;
  width: 100%;
`;
