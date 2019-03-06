import server from 'utils/server';

import {RefreshCredentials, UserCredentials} from './models';

const authenticate = (credentials: UserCredentials | RefreshCredentials) => {
  return server.post('auth/native', credentials);
};

export {authenticate};
