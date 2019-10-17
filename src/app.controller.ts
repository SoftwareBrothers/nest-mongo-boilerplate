import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  public healthCheck(): { OK: boolean } {
    return { OK: true };
  }
}
