export enum ROUTES {
  ALL = '*',
  HOME = '/',
  LOGIN = '/login/',
  NOT_FOUND = '/not-found/',
  FAQS = '/my-account/support/faqs/',
  CATEGORY = '/category',
  EXPLORE = '/explore',
  PROFILE = '/profile/',
  DESIGNER_SIGNUP = '/designer-signup/',
  DESIGNER_DASHBOARD = '/designer-dashboard/',
  CAPTURE_IMAGE = '/capture-image',
  MEASUREMENT = '/measurement'
}

export const PUBLIC_ROUTES_REDIRECT = [
  {
    path: '',
    to: ''
  }
];
