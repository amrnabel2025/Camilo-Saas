export function cn(...args: string[]) {
  // Join all arguments as a single string, similar to how classes would be merged
  return args.filter(Boolean).join(' ');
}
