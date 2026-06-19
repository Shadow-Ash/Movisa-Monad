export class BaseError extends Error {
    constructor(
        message: string,
        public readonly code: string,
    ) {
        super(message);
    }
}