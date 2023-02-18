import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Version('1')
  getHello(): string {
    const i = 1;
    return this.appService.getHello();
  }
}
