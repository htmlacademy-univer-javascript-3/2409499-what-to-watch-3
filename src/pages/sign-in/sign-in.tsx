import { Helmet } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { FormEvent, useRef, useState } from 'react';
import { login } from '../../store/api-actions';
import { AuthData } from '../../types/types';
import Footer from '../../components/footer/footer';
import { selectAuthStatus } from '../../store/user-process/user-process.selectors';

const validPassword = /^(?=.*[a-zA-Z])(?=.*\d)/;
const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const checkEmail = (email: string) => email.match(validEmail);

const checkPassword = (password: string) => password.match(validPassword);

function SignIn(): JSX.Element {
  const authStatus = useAppSelector(selectAuthStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (authData: AuthData) => {
    dispatch(login(authData));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (checkEmail(loginRef.current.value) && checkPassword(passwordRef.current.value)) {
        setErrorMessage('');
        onSubmit({
          email: loginRef.current.value,
          password: passwordRef.current.value
        });
      } else {
        setErrorMessage('Email or password is invalid. Password should contain at least 1 letter and 1 number');
      }
    }
  };

  return authStatus === AuthorizationStatus.Auth
    ? (<Navigate to={AppRoute.Main} />)
    : (
      <>
        <Helmet>
          <title>Вход</title>
        </Helmet>
        <div className="user-page">
          <header className="page-header user-page__head">
            <div className="logo">
              <Link to={AppRoute.Main} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <h1 className="page-title user-page__title">Sign in</h1>
          </header>

          <div className="sign-in user-page__content">
            <form action="#" className="sign-in__form" onSubmit={handleSubmit} data-testid="form">
              {errorMessage ? (
                <div className="sign-in__message">
                  <p>{errorMessage}</p>
                </div>
              ) : null}
              <div className="sign-in__fields">
                <div className="sign-in__field">
                  <input className="sign-in__input" ref={loginRef} type="email" placeholder="Email address"
                    name="user-email" id="user-email"
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
                </div>
                <div className="sign-in__field">
                  <input className="sign-in__input" ref={passwordRef} type="password" placeholder="Password"
                    name="user-password" id="user-password"
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <Footer />
        </div>
      </>
    );
}

export default SignIn;
