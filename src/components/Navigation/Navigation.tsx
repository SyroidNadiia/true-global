import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const Navigation: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button component={NavLink} to="/" variant="contained" color="primary">
          Home
        </Button>
        {isLoggedIn && (
          <Button
            component={NavLink}
            to="/tasks"
            variant="contained"
            color="primary"
          >
            Tasks
          </Button>
        )}
      </Box>
    </nav>
  );
};

export default Navigation;






