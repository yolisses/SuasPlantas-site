export function deleteKeyByKey(obj:Object) {
  // eslint-disable-next-line no-param-reassign
  Object.keys(obj).forEach((key) => { delete obj[key as keyof typeof obj]; });
}
