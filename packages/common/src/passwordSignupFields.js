/* eslint-disable flowtype/no-types-missing-file-annotation */
export const EMAIL_ONLY = 'EMAIL_ONLY';
export const USERNAME_AND_EMAIL = 'USERNAME_AND_EMAIL';
export const USERNAME_AND_OPTIONAL_EMAIL = 'USERNAME_AND_OPTIONAL_EMAIL';
export const USERNAME_ONLY = 'USERNAME_ONLY';

export type PasswordSignupFields =
  EMAIL_ONLY |
  USERNAME_AND_EMAIL |
  USERNAME_AND_OPTIONAL_EMAIL |
  USERNAME_ONLY;
