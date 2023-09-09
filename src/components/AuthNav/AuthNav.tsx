import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const AuthNav: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <Button
        component={Link}
        to="/register"
        variant="contained"
        color="primary"
      >
        Register
      </Button>
      <Button component={Link} to="/login" variant="contained" color="primary">
        Log In
      </Button>
    </Box>
  );
};

export default AuthNav;
