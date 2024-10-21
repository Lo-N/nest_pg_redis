import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/healthCheck.service';
import { Public } from 'src/decorators/route.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  healthCheck(): string {
    return this.appService.healthCheck();
  }
}
