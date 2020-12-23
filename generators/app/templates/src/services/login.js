import request from '@/utils/request';
import { api } from '@/utils/config';

/**
 * @description 登录
 * @author liuyuxuan
 * @date
 * @export
 * @param {Object} data
 * @param {string} data.account
 * @param {string} data.password
 * @returns
 */
export function login(data) {
  return request({
    method: 'POST',
    url: api.login.url,
    data
  });
}
