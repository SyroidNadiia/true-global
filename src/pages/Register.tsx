import AuthForm from 'components/AuthForm/AuthForm';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';
import { StyledRegister } from './sharedStyles.styled';

const Register: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <StyledRegister>
        <Typography variant="h4">Register</Typography>
        <AuthForm isRegistration={true} />
      </StyledRegister>
    </>
  );
};

export default Register;
