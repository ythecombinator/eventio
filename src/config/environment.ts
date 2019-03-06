const commonvars = {
  app: {
    name: process.env.APP_NAME,
    environment: process.env.ENVIRONMENT,
    version: process.env.npm_package_version,
    commitHash: process.env.BUDDY_EXECUTION_REVISION,
  },
  api: {
    url: process.env.API_URL,
    key: process.env.API_KEY,
  },
};

export default {
  currentType: process.env.NODE_ENV || 'development',
  settings: commonvars,
};
