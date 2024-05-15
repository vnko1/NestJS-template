import { Module } from '@nestjs/common';
import { AppController, AppService } from './app';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
