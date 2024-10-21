import { Module } from '@nestjs/common';
import { AppController } from '../controllers/healthCheck.controller';
import { AppService } from '../services/healthCheck.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth.module';
import { ItemModule } from './item.module';
import { PurchaseModule } from './purchase.module';

@Module({
  imports: [
    AuthModule,
    ItemModule,
    PurchaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
