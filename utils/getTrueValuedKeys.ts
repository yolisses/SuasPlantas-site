export function getTrueValuedKeys(obj: { [key: string]: any }): string[] {
  const result = [];
  for (let key in obj) {
    if (obj[key] === true) result.push(key);
  }
  return result;
}
