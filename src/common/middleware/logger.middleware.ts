import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const { body, originalUrl, method, url, query } = req;
    const params = {
      originalUrl,
      data: method === 'GET' ? query : body,
      url,
    };
    console.log('requset begin :', JSON.stringify(params));
    next();
  }
}
