export class InjectCmsError extends Error {
  public readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'InjectCmsError';
    this.status = status;
    // Required in TypeScript when extending built-in classes.
    // Without this, `e instanceof InjectCmsError` returns false at runtime.
    // See: TypeScript GitHub wiki — Breaking Changes TS 2.2
    Object.setPrototypeOf(this, InjectCmsError.prototype);
  }
}
