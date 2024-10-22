export const UserErrorMessages = {
  USER_NOT_FOUND: () => `User not found`,
  USER_NOT_FOUND_BY_ID: (id: string) => `User with ID ${id} not found`,
  USER_NOT_FOUND_BY_LOGIN: (login: string) => `User with login ${login} not found`,

  USER_UNABLE_TO_CREATE: () => 'Unable to create user with provided data',
  USER_UNABLE_TO_UPDATE: (id: string) => `Unable to update user with ID ${id}`,

  USER_NOT_ENOUGH_BALANCE: () => 'Not enough balance',
  USER_LOGIN_ALREADY_REGISTERED: (login: string) => `Login - ${login} already registered`,

  ACCESS_DENIED: () => 'Access denied',

  INVALID_CREDENTIALS: () => 'Invalid credentials',

  SOMETHING_WENT_WRONG: () => 'Something went wrong',

  INTERNAL_SERVER_ERROR: () => 'Internal server error',
};
