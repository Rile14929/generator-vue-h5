import md5 from 'blueimp-md5';

export const extName = (fileName = '') =>
  fileName.lastIndexOf('.') >= 0
    ? fileName.slice(fileName.lastIndexOf('.'))
    : '';

export const getExtName = (fileName, withdot = true) =>
  fileName.lastIndexOf('.') > 0
    ? fileName.slice(
        withdot ? fileName.lastIndexOf('.') : fileName.lastIndexOf('.') + 1
      )
    : '';

export function openUrl(url, blank = false) {
  const a = document.createElement('a');
  a.href = url;
  a.target = blank ? '_blank' : '_self';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function meterTransform(meter = 0) {
  if (meter > 999) {
    return `${(meter / 1000).toFixed(1)}km`;
  }
  return `${meter}m`;
}

export function sign(data = {}, t) {
  return {
    sign: md5(`param=${JSON.stringify(data)}&t=${t}&h5`),
    t: t,
    param: JSON.stringify(data)
  };
}
