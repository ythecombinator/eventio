import dayjs from 'dayjs';
import * as decodeToken from 'jwt-decode';

import {User} from 'modules/auth/models';

interface JWT {
  user: {
    _id: string;
    __v: number;
    candidateId: string;
  } & Pick<User, 'firstName' | 'lastName' | 'email' | 'id'>;
  iat: number;
  exp: number;
  iss: string;
}

const decode = (token: string): JWT => {
  try {
    return decodeToken(token);
  } catch (error) {
    return null;
  }
};

const willExpireInGivenInterval = (jwt: any, interval: number) => {
  const expiration = dayjs.unix(jwt.exp);
  const nextTenMinutes = dayjs().add(interval, 'second');
  return expiration < nextTenMinutes;
};

const isExpired = (jwt: any) => {
  const currentTime = new Date().getTime() / 1000;
  return currentTime > jwt.exp;
};

const isValid = (jwt: any) => {
  if (jwt) {
    return !isExpired(jwt);
  } else {
    return false;
  }
};

export {decode, willExpireInGivenInterval, isValid};
