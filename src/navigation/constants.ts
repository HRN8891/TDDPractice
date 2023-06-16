export const SCREEN_NAMES = {
  Welcome: 'Welcome',
  Register: 'Register',
  Login: 'Login',
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  Dashboard: 'Dashboard',
} as const;

export type screenNames = keyof typeof SCREEN_NAMES;
