export function getUniqueValues(values: any[]) {
  const o: { [key: string]: boolean } = {},
    a = [];
  for (let i = 0; i < values.length; i++) o[values[i]] = true;
  for (let e in o) a.push(e);
  return a;
}
