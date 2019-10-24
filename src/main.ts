import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { AllExceptionsFilter } from './common/http-exception.filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalFilters(new AllExceptionsFilter()); // 全局的自定义异常捕捉，适用于全部控制器，全部路由
  await app.listen(3000);
}
bootstrap();
