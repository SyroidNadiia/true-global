import { ReactElement } from 'react';

import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

interface PrivateRouteProps {
  component: ReactElement;
  redirectTo?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
