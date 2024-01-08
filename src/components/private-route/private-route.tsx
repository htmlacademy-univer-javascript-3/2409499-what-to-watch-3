import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: AuthorizationStatus;
}

function PrivateRoute({children, authStatus}: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
