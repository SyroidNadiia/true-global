import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

interface RestrictedRouteProps {
  component: ReactElement;
  redirectTo?: string;
}

export const RestrictedRoute: React.FC<RestrictedRouteProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
