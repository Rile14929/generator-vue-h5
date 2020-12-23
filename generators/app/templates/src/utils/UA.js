const UA = window.navigator.userAgent;

export default {
  isIOS: function() {
    return UA.includes('iPhone');
  },
  isAndroid: function() {
    return UA.includes('Android');
  },
  isMiniProgram: function() {
    return UA.includes('MicroMessenger') && UA.includes('miniProgram');
  },
  isWechatWeb: function() {
    return UA.includes('MicroMessenger') && !UA.includes('miniProgram');
  },
  isDingTalk: function() {
    return UA.match(/DingTalk/i) == 'dingtalk';
  }
};
