exports.PASSWORD_REGEXP =
  /(((?=.*[0-9])(?=.*[a-z]))|((?=.*[0-9])(?=.*[A-Z]))|((?=.*[0-9])(?=.*[[&@ ]))|((?=.*[A-Z])(?=.*[[&@ ]))|((?=.*[A-Z])(?=.*[a-z]))|((?=.*[a-z])(?=.*[[&@ ]))).{8,}/
// regex inspired by https://github.com/manishsaraan/email-validator/blob/master/index.js
exports.EMAIL_REGEXP =
  /^[-!#$%&'*+0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
exports.INSTAGRAM_REGEXP =
  /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/i
exports.FACEBOOK_REGEXP =
  // eslint-disable-next-line no-useless-escape
  /(?:https?:\/\/)?(?:www\.|m\.|mobile\.|touch\.|mbasic\.)?(?:facebook\.com|fb(?:\.me|\.com))\/(?!$)(?:(?:\w)*#!\/)?(?:pages\/|pg\/)?(?:photo\.php\?fbid=)?(?:[\w\-]*\/)*?(?:\/)?(?:profile\.php\?id=)?([^\/?&\s]*)(?:\/|&|\?)?.*/i
exports.TWITTER_REGEXP =
  /((?:(https|http)?:)?\/\/(?:[A-z]+\.)?)?twitter\.com\/@?(?!home|share|privacy|tos)?[A-z0-9_]\/?/i
exports.YOUTUBE_REGEXP =
  // eslint-disable-next-line no-useless-escape
  /^(?:https?:\/\/)?(?:(?:www)\.)?youtube\.com\/(?:channel\/|(?:c\/)?)([a-z\-_0-9]+)\/?(?:[\?#]?.*)/i
exports.TIKTOK_REGEXP =
  /\b(((https|http)?:\/\/)?(?:m|www)\.)?tiktok\.com\/(@[A-z0-9,.]*|.*\b(?:(?:usr|v|embed|user)\/|\?shareId=)(\d+)\b)/i
