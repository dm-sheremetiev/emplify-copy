// Parse Youtube account ID
export const getYouTubeAccountIdFromUrl = (url = '') => {
  const regExp = /^(?:https?:\/\/)?(?:(?:www)\.)?youtube\.com\/(?:channel\/|(?:c\/)?)([a-z\-_0-9]+)\/?(?:[?#]?.*)/i
  const match = url.match(regExp);
  if(match) {
    return match[1];
  }
  return undefined
};
