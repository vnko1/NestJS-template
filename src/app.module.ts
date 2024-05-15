import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BaseModule } from './base';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), BaseModule],
})
export class AppModule {}
