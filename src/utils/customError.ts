export class MatchedCustomError extends Error {
  readonly extensions?: Record<string, unknown>

  constructor(message: string, extensions?: Record<string, unknown>) {
    super(message)

    this.extensions = extensions || {}
  }
}
