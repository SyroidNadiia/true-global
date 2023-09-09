import styled from 'styled-components';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
`;

export const TaskImage = styled.img`
  width: 400px;
  height: 400px;
`;

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 70px;
`;

export const AuthContainer = styled.div`
  width: 100%;
  padding: 24px;
  background-color: var(--bgColorAuth);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 40px;
    width: 424px;
  }
`;

export const StyledTab = styled(Tab)`
  text-transform: none;
  border-radius: none;
  padding: 0px;
  margin: 0px;
  min-width: 0px;
  min-height: 0px;
  color: gray;
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;

  &:hover {
    color: #fff;
    opacity: 1;
  }

  &.Mui-selected {
    color: white;
  }
`;

export const StyledTabs = styled(Tabs)`
  & .MuiTabs-indicator {
    background-color: transparent;
  }

  & .MuiTabs-flexContainer {
    display: flex;
    gap: 14px;
    border: none;
    padding-bottom: 40px;
  }
`;
