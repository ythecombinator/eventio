const getDomain = (host: string) => {
  const regexParse = new RegExp('[a-z-0-9]{2,63}.[a-z.]{2,5}$');
  return regexParse.exec(host)[0];
};

const getDomainFromWindow = () => {
  return getDomain(window.location.hostname);
};

export {getDomain, getDomainFromWindow};
