export interface Request {
  method: string;
  url: string;
  body?: object;
  headers?: Record<string, string>;
  params?: Record<string, string>;
  query?: Record<string, string>;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  retryOn?: (error: Error) => boolean;
}