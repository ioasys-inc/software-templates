import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { CheckController } from './contexts/check/check.controller';
import { CheckService } from './contexts/check/check.service';

@Module({
  controllers: [CheckController],
  providers: [CheckService],
  imports: [TerminusModule],
})
export class HealthModule {}
