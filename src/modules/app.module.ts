import { Module } from '@nestjs/common';
import { AppController } from '../controllers/healthCheck.controller';
import { AppService } from '../services/healthCheck.service';
import { AuthModule } from './auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
