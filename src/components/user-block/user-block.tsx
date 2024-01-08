import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { selectAuthStatus, selectUser } from '../../store/user-process/user-process.selectors';
import { logout } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const authStatus = useAppSelector(selectAuthStatus);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <ul className="user-block">
      {authStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
            <Link to='/mylist'>
              <img src={user !== null ? user.avatarUrl : '/#'} alt="User avatar" width="63" height="63" data-testid="avatar"/>
            </Link>
            </div>
          </li>
          <li className="user-block__item">
            <Link
              className="user-block__link"
              to={AppRoute.SignIn}
              style={{ background: 'transparent', border: 'none' }}
              onClick={() => {
                dispatch(logout());
              }}
            >
              Sign out
            </Link>
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

export default UserBlock;
