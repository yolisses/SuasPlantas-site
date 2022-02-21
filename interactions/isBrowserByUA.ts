// this is not a 100% solution
export function isBrowserByUA(ua:string) {
  const validBrowserRegex = /Chrome|Firefox|Edge|MSIE|Safari|OPR/;
  if (ua && validBrowserRegex.test(ua)) return true;
  return false;
}
