import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheck, HealthCheckResult } from '@nestjs/terminus';
import { CheckService } from './check.service';

@Controller('healths')
export class CheckController {
  constructor(private readonly service: CheckService) {}

  @ApiTags('Health')
  @Get()
  @HealthCheck()
  index(): Promise<HealthCheckResult> {
    return this.service.execute();
  }
}
