import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllExceptionsFilter } from '../common/http-exception.filter';
import { CatEntity } from './cats.entity';
@Module({
  imports: [TypeOrmModule.forFeature([CatEntity])],
  controllers: [CatsController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }, // 自定义异常过滤器，针对对象为一系列的控制器
    CatsService,
  ],
})
export class CatsModule {}
