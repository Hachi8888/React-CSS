/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "styled-components";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const title = css({
    margin: 0,
    color: "pink"
  });

  return (
    <div css={containerStyle}>
      <p css={title}>- Emotion -</p>
      <StyledButton>FILGHT!</StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  background-color: orange;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
