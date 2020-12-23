const apiPrefix = '/bdtrip/admin/h5';

const api = {
  // 登录
  login: {
    url: '/login'
  },
};

const config = {
  development: {
    API: ''
  },
  test: {
    API: ''
  },
  staging: {
    API: ''
  },
  production: {
    API: ''
  }
};

function addPrefix(api, prefix) {
  Object.entries(api).forEach(([key, value]) => {
    api[key].url = `${prefix}${value.url}`;
  });
}

addPrefix(
  api,
  `${config[process.env.VUE_APP_ENV].API}${apiPrefix}`
);

export { api };
export default config[process.env.VUE_APP_ENV];
