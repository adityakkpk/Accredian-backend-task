export const logger = (message: string, level: 'info' | 'error' = 'info') => {
    const timestamp = new Date().toISOString();
    console[level](`${timestamp} - ${level.toUpperCase()}: ${message}`);
};