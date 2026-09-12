import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { message: string; status: string } {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): { status: string; version: string } {
    return this.appService.getHealth();
  }
}
