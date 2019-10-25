import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  LoggingInterceptor,
  TransformInterceptor,
  ErrorsInterceptor,
  TimeoutInterceptor,
} from './common/interceptor';
//import { AllExceptionsFilter } from './common/http-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalFilters(new AllExceptionsFilter()); // 全局的自定义异常捕捉，适用于全部控制器，全部路由
  app.useGlobalInterceptors(
    new LoggingInterceptor(), // 请求和返回结果日志包装
    new TransformInterceptor(), // 相应结果包装
    new ErrorsInterceptor(), // 异常抛出捕捉
    new TimeoutInterceptor(), // 异常抛出捕捉
  ); // 绑定全局拦截器
  await app.listen(3000);
}
bootstrap();
