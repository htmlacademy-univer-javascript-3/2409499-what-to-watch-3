import { describe } from 'vitest';
import { AuthorizationStatus } from '../../const';
import { userProcess } from './user-process';
import { checkAuth, login, logout } from '../api-actions';
import { ErrorDetails, UserAuth } from '../../types/types';

const user: UserAuth = {
  name: 'Aba',
  avatarUrl: 'url',
  email: 'hog@da.ru',
  token: '12345'
};

const authError: ErrorDetails = {
  errorType: 'some error',
  message: 'error message',
  details: [
    {
      property: 'prop',
      value: 'value',
      messages: ['msg1', 'msg2']
    }
  ]
};

describe('User process', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authStatus: AuthorizationStatus.Unknown,
      user: null,
      error: null
    };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authStatus: AuthorizationStatus.Unknown,
      user: null,
      error: null
    };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  describe('checkAuth', () => {
    it('should return correct state with fulfilled', () => {
      const expectedState = {
        authStatus: AuthorizationStatus.Auth,
        user: user,
        error: null
      };

      const result = userProcess.reducer(undefined, checkAuth.fulfilled(user, '', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with rejected', () => {
      const expectedState = {
        authStatus: AuthorizationStatus.NoAuth,
        user: null,
        error: authError
      };

      const result = userProcess.reducer(undefined, checkAuth.rejected(null, '', undefined, authError));

      expect(result).toEqual(expectedState);
    });
  });

  describe('login', () => {
    it('should return correct state with fulfilled', () => {
      const expectedState = {
        authStatus: AuthorizationStatus.Auth,
        user: user,
        error: null
      };

      const result = userProcess.reducer(undefined, login.fulfilled(user, '', {email: 'email@em.ru', password: 'abab45'}));

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with rejected', () => {
      const expectedState = {
        authStatus: AuthorizationStatus.NoAuth,
        user: null,
        error: authError
      };

      const result = userProcess.reducer(undefined, login.rejected(null, '', {email: 'email@em.ru', password:'abab45'}, authError));

      expect(result).toEqual(expectedState);
    });
  });

  it('should return correct state with logout.fulfilled', () => {
    const expectedState = {
      authStatus: AuthorizationStatus.NoAuth,
      user: null,
      error: null
    };
    const initialState = {...expectedState, user: user, authStatus: AuthorizationStatus.Auth};

    const result = userProcess.reducer(initialState, logout.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
