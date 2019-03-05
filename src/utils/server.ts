import axios from 'axios';

import config from 'config/environment';

const {key, url} = config.settings.api;

const instance = axios.create({
  baseURL: url,
  headers: {APIKey: key},
});

export default instance;
