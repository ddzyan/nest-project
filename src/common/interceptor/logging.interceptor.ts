/**
 * 使用拦截器实现对路由执行前后，添加指定逻辑
 */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// 使用 Injectable 装饰器进行注解，实现 NestInterceptor 接口
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const { body, originalUrl, method, url, query } = req;
    const params = {
      originalUrl,
      data: method === 'GET' ? query : body,
      url,
    };
    console.log('requset begin :', JSON.stringify(params));
    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
