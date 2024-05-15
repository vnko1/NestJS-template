import { Module } from '@nestjs/common';
import { BaseController } from '../controller/base.controller';
import { BaseService } from '../service/base.service';


@Module({
  imports: [],
  controllers: [BaseController],
  providers: [BaseService],
})
export class BaseModule {}
