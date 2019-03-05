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

export {setCookie, getCookie};
