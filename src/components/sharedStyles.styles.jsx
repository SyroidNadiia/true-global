import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Box } from '@mui/material';
import { DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 70px;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessageContainer = styled(ErrorMessage)`
  color: red;
`;

export const StyledIcon = styled(AddIcCallIcon)`
  color: blue;
`;

export const ButtonIcon = styled.button`
  border: none;
  background-color: #d7d4f8;
  cursor: pointer;
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 80px;
`;

export const BookImage = styled.img`
  width: 400px;
  height: 400px;
`;

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 70px;
`;


export const ModalTitle = styled(DialogTitle)`
  text-align: center;
`;

export const ModalCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  border-radius: 50%;
  border: solid 1px #d7d4f8;
  position: absolute;
  top: 8px;
  right: 8px;
`;