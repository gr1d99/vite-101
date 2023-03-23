function classNames (...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export const stylesUtils = { classNames }
