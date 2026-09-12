import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; status: string } {
    return { message: 'Solstice Devs Node Service is running', status: 'ok' };
  }

  getHealth(): { status: string; version: string } {
    return { status: 'healthy', version: '1.0.0' };
  }
}
