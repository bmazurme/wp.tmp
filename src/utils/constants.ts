export const AUTH_URL = '/';
export const DEFAULT_IMG = 'uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg';

export const oauth = {
  clientId: 'c709762dfe3e447999beb343da0bee9f',
  clientSecret: 'c1ff76a0170e4f49b9572665a233d901',
};

export const Paths = {
  MAIN: '/',
  ABOUT: '/about',
  HISTORY: '/history',
  OAUTH: '/oauth',
  UI_KIT: '/uikit',
  PASSWORD: {
    RESET: '/password/reset',
    UPDATE: '/password/update',
    NEW: '/password/new/:token',
  },
  PROFILE: {
    INDEX: '/profile',
    EDIT: '/profile/edit',
  },
  PROJECT: {
    INDEX: '/project',
    EDIT: '/project/edit',
  },
  SIGN: {
    IN: '/signin',
    UP: '/signup',
    CONFIRM: '/confirm/:token',
  },
};
