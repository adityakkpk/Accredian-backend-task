import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      // Add custom types if needed
    }
  }
}