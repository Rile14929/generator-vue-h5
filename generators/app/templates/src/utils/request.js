import axios from 'axios';
import { oauth } from '@/utils/utils';
import { Toast } from 'vant';
import router from '@/router';

axios.interceptors.request.use(
  config => {
    const token = localStorage.token;
    token && (config.headers.token = token);
    return config;
  },
  err => Promise.reject(err)
);

function request(options) {
  return axios(options)
    .then(response => {
      const { statusText, status, data } = response;
      if (data?.result?.c !== 200) {
        if (data?.result?.c === 91000) {
          // 登录失效
          localStorage.clear();
          router.push({ name: 'Login' });
        } else if (data?.result?.c !== 12002) {
          if (data?.result?.m) {
            Toast(data?.result?.m || '');
          }
        }
      }
      return {
        success: true,
        message: statusText,
        status,
        ...data
      };
    })
    .catch(error => {
      const { response } = error;
      let msg;
      let status;
      let otherData = {};
      if (response) {
        const { data, statusText } = response;
        otherData = data;
        status = response.status;
        msg = data.message || statusText;
      } else {
        status = 600;
        msg = 'Network Error';
      }
      return { success: false, status, message: msg, ...otherData };
    });
}

export default request;
