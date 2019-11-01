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
    const { body, method, url, query } = req;

    console.log(
      `${new Date().toLocaleString()} ${url} ${method} begin||requestData:${
        method === 'GET' ? JSON.stringify(query) : JSON.stringify(body)
      }`,
    );
    const now = Date.now();
    return next.handle().pipe(
      tap(
        data =>
          console.log(
            `${new Date().toLocaleString()} ${url} ${method} end||responseBody:${JSON.stringify(
              data,
            )}||time:${Date.now() - now}ms`,
          ),
        err => {
          console.log(
            `${new Date().toLocaleString()} ${url} ${method} error||errorDetail:${JSON.stringify(
              err,
            )}||time:${Date.now() - now}ms`,
          );
        },
      ),
    );
  }
}
