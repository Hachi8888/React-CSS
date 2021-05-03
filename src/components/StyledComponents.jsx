import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <StyledContainer>
      <StyledTitle>- Styled Components-</StyledTitle>
      <StyledButton>FILGHT!</StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledTitle = styled.p`
  margin: 0px;
  color: pink;
`;

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
