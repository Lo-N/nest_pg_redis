import { Module } from '@nestjs/common';
import { AppController } from '../controllers/healthCheck.controller';
import { AppService } from '../services/healthCheck.service';
import { AuthModule } from './auth.module';
import { ItemModule } from './item.module';
import { PurchaseModule } from './purchase.module';

@Module({
  imports: [
    AuthModule,
    ItemModule,
    PurchaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
