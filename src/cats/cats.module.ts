import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { APP_FILTER } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllExceptionsFilter } from '../common/http-exception.filter';
import { CatEntity } from './cats.entity';
import { ConfigModule } from '../config/config.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([CatEntity]),
    ConfigModule.register({ folder: './config' }),
  ],
  controllers: [CatsController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    CatsService,
  ],
})
export class CatsModule {}
