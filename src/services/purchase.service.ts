import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchaseService {
  constructor() {}

  async makePurchase() {
    return { balance: 10 }
  }
}
