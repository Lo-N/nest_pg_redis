import { Controller, Post } from '@nestjs/common';
import { PurchaseService } from 'src/services/purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}

  @Post()
  makePurchase() {
    return this.purchaseService.makePurchase();
  }
}
