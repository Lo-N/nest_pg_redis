import { Module } from '@nestjs/common';
import { AppController } from '../controllers/healthCheck.controller';
import { AppService } from '../services/healthCheck.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
