/**
 * 拦截器
 * 获得路由最终返回结果，对结果进行统一封装处理
 */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

/* export interface Response<T> {
  data: T;
} */

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const bodyTemple = {
      statusCode: '1000',
      message: 'SUCCESS',
      sub_code: '0001',
      success: true,
    };
    return next.handle().pipe(map(data => Object.assign(bodyTemple, { data })));
  }
}
