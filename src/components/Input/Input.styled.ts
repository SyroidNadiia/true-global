import styled from '@emotion/styled';

export const InputStyled = styled.input`
  width: calc(100%);
  height: 49px;
  padding: 14px 18px;
  display: flex;
  align-items: center;

  border-radius: 8px;

  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  opacity: 0.4;

  outline: none;
  transition: all 150ms ease;

  font-size: 14px;
  letter-spacing: -0.28px;
  font-family: inherit;
  background: #fff;
  border: 1px solid #5255bc;
  color: #161616;
  box-sizing: border-box;
   &::placeholder {
    font-size: 14px;
    letter-spacing: -0.28px;
    color: #161616;
  }

  &:focus {
    opacity: 1;
  }
`;

export const InputUnit = styled.div`
  position: relative;
  width: 100%;

`;

export const PasswordWrapperIcon = styled.span`
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  color: #161616;
  opacity: 0.4;
`;


