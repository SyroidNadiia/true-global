// import { useDispatch } from 'react-redux';
// import { Button } from '@mui/material';
import { useAuth } from 'hooks';
// import { logOut } from 'redux/auth/operations';
import { Typography } from '@mui/material';
import { UserMenuContainer } from './UserMenu.styled';


const UserMenu: React.FC = () => {
  // const dispatch = useDispatch();
  const { user } = useAuth();

  // const handleLogout = () => dispatch(logOut());

  return (
    <UserMenuContainer>
      <Typography variant="body1">Welcome, {user.name}</Typography>
      {/* <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button> */}
    </UserMenuContainer>
  );
};

export default UserMenu;
