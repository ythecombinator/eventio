import dayjs from 'dayjs';
import * as decodeToken from 'jwt-decode';

const decode = (token: string) => {
  try {
    return decodeToken(token);
  } catch (error) {
    return undefined;
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
