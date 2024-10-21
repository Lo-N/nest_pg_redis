import { Module } from '@nestjs/common';
import { PurchaseController } from 'src/controllers/purchase.controller';
import { PurchaseService } from 'src/services/purchase.service';

@Module({
  imports: [],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
