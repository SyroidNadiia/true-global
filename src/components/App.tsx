import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import { useAuth } from 'hooks';
import Layout from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
// import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
// const ContsctsPage = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(()=> import('./NotFound/NotFound'))

const App: React.FC = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
