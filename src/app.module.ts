import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { CatsController } from './cats/cats.controller';
import { AppService } from './app/app.service';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
