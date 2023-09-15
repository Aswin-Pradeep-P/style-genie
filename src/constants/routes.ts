export enum ROUTES {
  ALL = '*',
  HOME = '/',
  LOGIN = '/login/',
  NOT_FOUND = '/not-found/',
  FAQS = '/my-account/support/faqs/',
  CATEGORY = '/category',
  EXPLORE = '/explore',
  PROFILE = '/profile/'
}

export const PUBLIC_ROUTES_REDIRECT = [
  {
    path: '',
    to: ''
  }
];
