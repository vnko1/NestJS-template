import { Module } from '@nestjs/common';
import { BaseModule } from './base';


@Module({
  imports: [BaseModule],

})
export class AppModule {}
