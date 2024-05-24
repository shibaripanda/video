import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getGenres(): Promise<any> {
    return this.appService.getGenres();
  }

  @Get('filter/:ur')
  getFilterData(@Param('ur') ur: string) {
    return this.appService.getFilterData(ur);
  }

  @Get('id/:id')
  getById(@Param('id') id: string) {
    return this.appService.getById(id);
  }

  @Get('filterdata/:ur')
  getData(@Param('ur') ur: string) {
    return this.appService.getData(ur);
  }
}