import {getCookie} from 'utils/cookies';

import {decode, isValid} from './jwt';

const isLogged = () => {
  const token = getCookie('authenticationToken');
  const decodedToken = decode(token);

  return isValid(decodedToken);
};

export {isLogged};
