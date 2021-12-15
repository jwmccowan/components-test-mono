export const classNames = (...args: (string | undefined | false)[]): string => args.filter(Boolean).join(' ');
