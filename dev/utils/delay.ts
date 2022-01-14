export async function delay(time = 1000) {
  return new Promise((resolve) => { setInterval(() => resolve(undefined), time); });
}
