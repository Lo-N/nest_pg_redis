import { Injectable } from '@nestjs/common';
import { IAccessTokenData } from 'src/interfaces/accessTokenData.interface';

@Injectable()
export class PurchaseService {
  constructor() {}

  async makePurchase(userInfo: IAccessTokenData, requestBody: any) {
    return { makePurchase: 'makePurchase' }
  }
}
