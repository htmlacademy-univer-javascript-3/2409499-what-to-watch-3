import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { removeToken } from '../../services/token';
import { selectAuthStatus, selectUser } from '../../store/user-process/user-process.selectors';
import { logout } from '../../store/api-actions';

function Header(): JSX.Element {
  const authStatus = useAppSelector(selectAuthStatus);
  const user = useAppSelector(selectUser);
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
                removeToken();
                dispatch(logout());
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
