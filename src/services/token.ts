const AUTH_TOKEN_KEY_NAME = 'wtw-token';

export function getToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? '';
}

export function setToken(token: string) {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
}

export function removeToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
}
