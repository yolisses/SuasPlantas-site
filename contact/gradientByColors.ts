export function gradientByColors(colors:string[], directions:string[] = ['bottom', 'left']) {
  return `linear-gradient(to ${directions.reduce((previous, current) => `${previous} ${current}`, '')} ${
    colors.reduce((previous, current) => `${previous}, ${current}`, '')
  })`;
}
