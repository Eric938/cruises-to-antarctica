export const iosChecker = () => {
  return [
    'iPhone Simulator',
    'iPod Simulator',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
};
