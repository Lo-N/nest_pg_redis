import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MakePurchaseDto } from 'src/dto/makePurchase.dto';
import { IAccessTokenData } from 'src/interfaces/accessTokenData.interface';
import { Item } from 'src/models/item.model';
import { ItemService } from './item.service';
import { UserService } from './user.service';
import { UserErrorMessages } from 'src/utils/userErrorMessages.utils';
import { Purchase } from 'src/models/purchase.model';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectModel(Purchase) private purchaseRepository: typeof Purchase,
    private sequelize: Sequelize,
    private itemsService: ItemService,
    private userService: UserService,
  ) {}

  private calculatePurchaseAmount(itemsMap: Map<string, number>, items: Array<Item>): number {
    return items.reduce((amount: number, item: Item) => {
      const quantity = itemsMap.get(item.id)!;
      return amount = (amount * 100 + item.price * 100 * quantity) / 100
    }, 0)
  }

  private calculateUserBalance(userBalance: number, purchaseAmount: number): number {
    // 12.5 -> 1250; userBalance to cents
    // 9.21 -> 921; purchaseAmount to cents
    // 1250 - 921 = 329; result in cents
    // 329 -> 3.29; result
    return (userBalance * 100 - purchaseAmount * 100) / 100
  }

  async makePurchase(userInfo: IAccessTokenData, requestBody: MakePurchaseDto): Promise<number> {
    const user = await this.userService.getUserById(userInfo.id);

    if (user.balance === 0) {
      throw new BadRequestException(UserErrorMessages.USER_NOT_ENOUGH_BALANCE());
    }

    const itemsMap = new Map<string, number>();
    requestBody.items.forEach((item) => {
      itemsMap.set(item.itemId, item.quantity)
    })

    const itemsIds = Array.from(itemsMap.keys())

    const items = await this.itemsService.getItemsByIds(itemsIds);

    if (items.length === 0) {
      throw new NotFoundException(UserErrorMessages.ITEMS_NOT_FOUND)
    }

    const calculateAmount = this.calculatePurchaseAmount(itemsMap, items);

    if (calculateAmount > user.balance) {
      throw new BadRequestException(UserErrorMessages.USER_NOT_ENOUGH_BALANCE());
    }

    const newUserBalance = this.calculateUserBalance(user.balance, calculateAmount);

    try {
      await this.sequelize.transaction(async t => {
        await this.purchaseRepository.create(
          {
            amount: calculateAmount,
            userId: userInfo.id,
            itemsIds,
          },
          {
            transaction: t,
          },
        )

        await this.userService.updateUser(user, { balance: newUserBalance }, t)
      })

      return newUserBalance
    } catch (error) {
      console.warn(`An error occur at ${this.makePurchase.name}`, error);
      throw error
    }
  }
}
