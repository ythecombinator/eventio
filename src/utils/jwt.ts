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

export {decode, willExpireInGivenInterval};
