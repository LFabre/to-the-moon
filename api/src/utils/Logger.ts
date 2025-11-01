export class Logger {
  private prefixes: string[];

  constructor(prefix: string) {
    this.prefixes = [prefix];
  }

  addPrefix(prefixes: string) {
    this.prefixes.push(prefixes);
  }

  info(...args: any[]) {
    console.info(...this.prefixes, ...args);
  }

  debug(...args: any[]) {
    console.debug(...this.prefixes, ...args);
  }

  warn(...args: any[]) {
    console.warn(...this.prefixes, ...args);
  }

  error(...args: any[]) {
    console.error(...this.prefixes, ...args);
  }
}
