import { Body, Controller, Post } from '@nestjs/common';
import { UserInfo } from 'src/decorators/userTokenInfo.decorator';
import { IAccessTokenData } from 'src/interfaces/accessTokenData.interface';
import { PurchaseService } from 'src/services/purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}

  @Post()
  makePurchase(@UserInfo() userInfo: IAccessTokenData, @Body() requestBody: any) {
    return this.purchaseService.makePurchase(userInfo, requestBody);
  }
}
