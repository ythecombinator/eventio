import {CookieParseOptions, parse} from 'cookie';
import {IncomingMessage} from 'http';
import {get, set} from 'js-cookie';

import {getDomainFromWindow} from 'utils/url';

const setCookie = (key: string, value: string) => {
  if (process.browser) {
    set(key, value, {domain: getDomainFromWindow()});
  }
};

const getCookie = (cookie: string) => {
  return get(cookie);
};

const parseCookies = (req?: IncomingMessage, options: CookieParseOptions = {}) => {
  return parse(req ? (req.headers.cookie as string) || '' : document.cookie, options);
};

export {setCookie, getCookie, parseCookies};
