import {
  Module,
  NestModule,
  MiddlewareConsumer,
  //RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
// import { CatEntity } from './cats/cats.entity'; 采用指定路径导入

@Module({
  imports: [TypeOrmModule.forRoot(), CatsModule],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply() //可以设置多个中间件，参数的传入顺序，等于中间件的执行顺序
      //.exclude({ path: 'cats', method: RequestMethod.POST }) // 排除中间件的消费对象，参数不能为控制器
      //.forRoutes({ path: 'cats', method: RequestMethod.GET }); // 设置中间件的消费路径和方法
      .forRoutes(CatsController); // 设置中间件消费的控制器
  }
}
