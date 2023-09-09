import { useSelector } from 'react-redux';
import { RootState } from 'redux/auth/selectors';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector((state: RootState) => selectIsLoggedIn(state));
  const isRefreshing = useSelector((state: RootState) =>
    selectIsRefreshing(state)
  );
  const user = useSelector((state: RootState) => selectUser(state));

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};