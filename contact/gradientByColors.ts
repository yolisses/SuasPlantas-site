export function gradientByColors(colors:string[]) {
  return `linear-gradient(to bottom left${
    colors.reduce((previous, current) => `${previous}, ${current}`, '')
  })`;
}
