import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setAuthStatus, setUser } from '../../store/action';
import { AppRoute, AuthorizationStatus } from '../../const';
import { removeToken } from '../../services/token';

function Header(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      {authStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user?.avatarUrl} alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <button
              className="user-block__link"
              style={{ background: 'transparent', border: 'none' }}
              onClick={() => {
                dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
                dispatch(setUser(null));
                removeToken();
              }}
            >
              Sign out
            </button>
          </li>
        </>
      ) : (
        <Link to={AppRoute.SignIn} className="user-block__link">
          Sign in
        </Link>
      )}

    </ul>
  );
}

export default Header;
