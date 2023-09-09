import AuthForm from 'components/AuthForm/AuthForm';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';
import { StyledRegister } from './sharedStyles.styled';

const Login: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <StyledRegister>
        <Typography variant="h4">Login</Typography>
        <AuthForm isRegistration={false} />
      </StyledRegister>
    </>
  );
};

export default Login;
