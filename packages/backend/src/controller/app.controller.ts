import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getIndexPage(): string {
    return this.appService.getIndexPage();
  }

  @Get('/list')
  getListPage(): string {
    return this.appService.getListPage();
  }

  @Get('/input')
  getInputPage(): string {
    return this.appService.getInputPage();
  }

  @Get('/output')
  getOutputPage(): string {
    return this.appService.getOutputPage();
  }

  @Get('/account')
  getAccountPage(): string {
    return this.appService.getAccountPage();
  }

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }
}
