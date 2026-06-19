type LogLevel =
    | 'info'
    | 'warn'
    | 'error';

export function logger(
    level: LogLevel,
    message: string,
    metadata?: unknown,
) {
    console[level](
        `[MOVISA] ${message}`,
        metadata ?? '',
    );
}