export enum AUTH {
  login = 'LOGIN-USER',
  signUp = 'SIGN-UP',
  logOut = 'LOGOUT',
}

export const loginAction = () => ({
  type: AUTH.login,
});

export const signUpAction = () => ({
  type: AUTH.signUp,
});

export const logOutAction = () => ({
  type: AUTH.logOut,
});
